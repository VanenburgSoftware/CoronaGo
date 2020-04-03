declare function require(path: string);
import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit, forwardRef, Renderer2 } from '@angular/core';
import { fromEvent } from 'rxjs';
import { switchMap, takeUntil, pairwise } from 'rxjs/operators';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AppConstants } from '@app/app-constants';

@Component({
  selector: 'app-vs-freehand',
  templateUrl: './vs-freehand.component.html',
  styleUrls: ['./vs-freehand.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => VsFreehandComponent),
      multi: true
    }
  ]
})
export class VsFreehandComponent implements OnInit, AfterViewInit, ControlValueAccessor {

  @ViewChild('canvas') public canvas: ElementRef;
  @ViewChild('textInput') public textInput: ElementRef;
  @Input() toolbar: boolean = false;

  private _model: any;
  private onChange: (m: any) => void;
  private onTouched: (m: any) => void;

  public width: number;
  public height: number;

  private canvasEl: HTMLCanvasElement;
  private cx: CanvasRenderingContext2D;

  private memCanvasEl: HTMLCanvasElement;
  private memCx: CanvasRenderingContext2D;

  private started = false;
  private lastx = 0;
  private lasty = 0;
  private points = [];
  private isMobile;

  public tool: string = 'pencil';
  private imageStr: any;
  public imageList: any[] = [];
  public showDrawings = false;


  constructor(
    private renderer: Renderer2
  ) { }

  get model() {
    return this._model;
  }

  writeValue(value: any): void {
    // this.loadImage(value);
    this._model = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  set(value: any) {
    this._model = value;
    this.onChange(this._model);
  }


  mouseDown(e: MouseEvent) {
    let m = this.getMouse(e, this.canvasEl);
    if (this.isMobile) {
      m = this.getMouseMobile(e, this.canvasEl);
    }
    this.points.push({
      x: m.x,
      y: m.y
    });
    this.started = true;
  }

  mouseMove(e: MouseEvent) {
    if (this.started) {
      // this.cx.clearRect(0, 0, 300, 300);
      // put back the saved content
      this.cx.drawImage(this.memCanvasEl, 0, 0);
      let m = this.getMouse(e, this.canvasEl);
      if (this.isMobile) {
        m = this.getMouseMobile(e, this.canvasEl);
      }
      this.points.push({
        x: m.x,
        y: m.y
      });
      this.drawPoints(this.cx, this.points);
    }
  }

  mouseUp(e: MouseEvent) {
    if (this.started) {
      this.started = false;
      // When the pen is done, save the resulting context
      // to the in-memory canvas
      // this.memCx.clearRect(0, 0, 300, 300);
      this.memCx.drawImage(this.canvasEl, 0, 0);
      this.points = [];
    }
  }

  drawPoints(ctx, points) {
    // draw a basic circle instead
    if (points.length < 6) {
      var b = points[0];
      ctx.beginPath(), ctx.arc(b.x, b.y, ctx.lineWidth / 2, 0, Math.PI * 2, !0), ctx.closePath(), ctx.fill();
      return;
    }

    if (this.tool === 'pencil' || this.tool === 'eraser') {
      if (this.tool === 'pencil') {
        ctx.strokeStyle = '#333333';
        ctx.lineWidth = 3;
      } else {
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 20;
      }

      ctx.globalCompositeOperation = 'source-over';
      ctx.beginPath(), ctx.moveTo(points[0].x, points[0].y);
      // draw a bunch of quadratics, using the average of two points as the control point
      for (var i = 1; i < points.length - 2; i++) {
        var c = (points[i].x + points[i + 1].x) / 2,
          d = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, c, d);
      }
      ctx.quadraticCurveTo(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y), ctx.stroke();
    }
    else if (this.tool === 'text') {
      this.createInputInPosition(points[0]);
    }
  }

  getMouse(e, canvas) {
    let element = canvas;
    let offsetX = 0;
    let offsetY = 0;
    let mx;
    let my;

    // Compute the total offset. It's possible to cache this if you want
    if (element.offsetParent !== undefined) {
      do {
        offsetX += element.offsetLeft;
        offsetY += element.offsetTop;
      } while ((element = element.offsetParent));
    }

    mx = e.pageX - offsetX;
    my = e.pageY - offsetY;

    // We return a simple javascript object with x and y defined
    return { x: mx, y: my };
  }

  getMouseMobile(e, canvasEl) {
    const rect = canvasEl.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    }
  }


  clear() {
    this.cx.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);
    this.memCx.clearRect(0, 0, this.memCanvasEl.width, this.memCanvasEl.height);
  }

  setCanvasDimensions() {
    this.canvasEl = this.canvas.nativeElement;
    const rect = this.canvasEl.getBoundingClientRect();
    this.canvasEl.width = this.canvasEl.offsetWidth ? this.canvasEl.offsetWidth : AppConstants.isMobile ? window.innerWidth : 400;
    this.canvasEl.height = this.canvasEl.offsetHeight ? this.canvasEl.offsetHeight : this.canvasEl.width;
    this.canvasEl.style.width = "100%";
    this.canvasEl.style.height = "100%";
  }

  private captureTouchEvents(canvasEl: HTMLCanvasElement) {
    canvasEl.addEventListener("touchstart", (e) => {
      var touch = e.touches[0];
      var mouseEvent = new MouseEvent("mousedown", {
        clientX: touch.clientX,
        clientY: touch.clientY
      });
      canvasEl.dispatchEvent(mouseEvent);
    }, false);
    canvasEl.addEventListener("touchend", function (e) {
      var mouseEvent = new MouseEvent("mouseup", {});
      canvasEl.dispatchEvent(mouseEvent);
    }, false);
    canvasEl.addEventListener("touchmove", function (e) {
      var touch = e.touches[0];
      var mouseEvent = new MouseEvent("mousemove", {
        clientX: touch.clientX,
        clientY: touch.clientY
      });
      canvasEl.dispatchEvent(mouseEvent);
    }, false);
  }

  private preventScrollingOnMobile(canvasEl: HTMLCanvasElement) {
    document.body.addEventListener("touchstart", function (e) {
      canvasEl.style.touchAction = "none";

      if (e && e.target == canvasEl && e.cancelable) {
        e.preventDefault();
      }
    }, false);
    document.body.addEventListener("touchend", function (e) {
      canvasEl.style.touchAction = "none";
      if (e.target == canvasEl && e.cancelable) {
        e.preventDefault();
      }
    }, { passive: false });
    document.body.addEventListener("touchmove", function (e) {
      canvasEl.style.touchAction = "none";
      if (e.target == canvasEl && e.cancelable) {
        e.preventDefault();
      }
    }, false);
  }

  handleKeyDown(e: KeyboardEvent) {
    if (e.which === 13) {
      this.handleInputBlur(e);
    }
  }

  handleInputBlur(e: Event) {
    this.convertTextToImage(e);
  }

  convertTextToImage(e) {
    const input = this.textInput.nativeElement;
    this.cx.font = "14px Sans-serif";
    this.cx.fillText(input.value, input.offsetLeft, input.offsetTop);
    input.value = "";
    this.renderer.setStyle(input, 'display', 'none');
  }

  createInputInPosition(position) {
    const input = this.textInput.nativeElement;
    this.renderer.setStyle(input, 'display', 'block');
    this.renderer.setStyle(input, 'top', position.y + 'px');
    this.renderer.setStyle(input, 'left', position.x + 'px');
  }

  convertDrawingToImageString(e?: Event) {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.imageStr = String(canvasEl.toDataURL());
    this._model = this.imageStr;
    this.onChange(this._model);
  }

  changeTool(tool) {
    this.tool = tool;
  }

  toggleDrawings() {
    this.showDrawings = !this.showDrawings;
  }

  loadImage(image) {
    var imageObj = new Image();
    imageObj.onload = (e) => {
      var hRatio = this.canvasEl.width / imageObj.width / 2;
      var vRatio = this.canvasEl.height / imageObj.height / 2;
      var ratio = Math.min(hRatio, vRatio);
      var centerShift_y = (this.canvasEl.height - imageObj.height * ratio) / 4;
      var centerShift_x = 10;
      this.cx.drawImage(imageObj, 0, 0, imageObj.width, imageObj.height,
        centerShift_x, centerShift_y, imageObj.width * ratio, imageObj.height * ratio);

      /* this.points.push({
        x: imageObj.width,
        y: imageObj.height
      }); */
    }

    imageObj.src = image;
  }

  clearCanvas() {
    this.cx.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);
    this.memCx.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);
  }

  ngOnInit() {
    this.isMobile = AppConstants.isMobile;
    this.setCanvasDimensions();
    this.imageList = [require('./images/urology.gif'), require('./images/humanbody.jpg'), require('./images/kidneycrosssection.jpg'), require('./images/kidneys.jpg')];
  }

  ngAfterViewInit(): void {
    this.canvasEl = this.canvas.nativeElement;
    this.canvasEl.addEventListener('mousedown', this.mouseDown.bind(this), false);
    this.canvasEl.addEventListener('mousemove', this.mouseMove.bind(this), false);
    this.canvasEl.addEventListener('mouseup', this.mouseUp.bind(this), false);
    this.cx = this.canvasEl.getContext('2d');

    this.cx.lineWidth = 3;
    this.cx.lineCap = "round";
    this.cx.lineJoin = "round";
    this.cx.strokeStyle = '#000';

    this.memCanvasEl = document.createElement('canvas');
    this.memCanvasEl.width = this.canvasEl.width;
    this.memCanvasEl.height = this.canvasEl.height;
    this.memCanvasEl.style.width = "100%";
    this.memCanvasEl.style.height = "100%";
    this.memCx = this.memCanvasEl.getContext('2d');

    this.captureTouchEvents(this.canvasEl);
    this.preventScrollingOnMobile(this.canvasEl);
  }

}

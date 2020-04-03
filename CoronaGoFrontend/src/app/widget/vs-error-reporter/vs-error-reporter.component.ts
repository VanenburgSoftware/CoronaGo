import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import html2canvas from 'html2canvas';
import { VsTabmenuIntegrationService } from '../vs-tabmenu-integration.service';
import { AppLoaderService } from '@app/shared/services/app-loader.service';
import moment from 'moment';

@Component({
  selector: 'app-vs-error-reporter',
  templateUrl: './vs-error-reporter.component.html',
  styleUrls: ['./vs-error-reporter.component.scss']
})
export class VsErrorReporterComponent implements OnInit {

  @Input() config: any;

  canvas: HTMLCanvasElement;
  ctx: any;
  rect: any = {};
  drag = false;
  imageUrl: any;

  croppedCanvas: HTMLCanvasElement;
  croppedCanvasCtx: any;
  showForm: boolean = true;

  url: string;
  page: string;
  description: string;
  what: string;
  why: string;
  where: string;
  when: string | number | Date;
  who: string;
  how: string;
  howMuch: string;


  constructor(private tabMenuIntegration: VsTabmenuIntegrationService, private loader: AppLoaderService) { }

  mouseDown(e) {

    this.rect.startX = e.pageX;
    this.rect.startY = e.pageY;
    this.drag = true;
  }

  mouseUp(error) {
    this.drag = false;
    this.takeScreenShot();
    this.clearCanvas();
  }

  mouseMove(e) {
    if (this.drag) {
      this.rect.w = (e.pageX) - this.rect.startX;
      this.rect.h = (e.pageY) - this.rect.startY;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.draw();
    }
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.lineWidth = '5';
    this.ctx.strokeStyle = 'red';
    this.ctx.rect(this.rect.startX, this.rect.startY, this.rect.w, this.rect.h);
    this.ctx.stroke();
  }

  clearCanvas() {
    this.canvas.remove();
    this.loader.show();
  }

  drawOverNew() {
    this.croppedCanvas.addEventListener('mousedown', this.mouseDown.bind(this), false);
    this.croppedCanvas.addEventListener('mouseup', this.mouseUp.bind(this), false);
    this.croppedCanvas.addEventListener('mousemove', this.mouseMove.bind(this), false);

    this.canvas = this.croppedCanvas;
    this.ctx = this.croppedCanvasCtx;
    this.draw();
  }

  takeScreenShot() {
    html2canvas(document.querySelector('body')).then(canvas => {
      this.croppedCanvas = document.createElement('canvas');
      this.croppedCanvasCtx = this.croppedCanvas.getContext('2d');

      this.croppedCanvas.width = this.rect.w;
      this.croppedCanvas.height = this.rect.h;

      this.croppedCanvasCtx.drawImage(
        canvas,
        this.rect.startX,
        this.rect.startY,
        this.rect.w,
        this.rect.h,
        0,
        0,
        this.rect.w,
        this.rect.h
      );

      this.imageUrl = this.croppedCanvas.toDataURL();
      this.loadDefaultFormValues();

      this.loader.hide();
      // this.drawOverNew();
    });
  }

  reportBug() {
    const cn = document.createElement('canvas');
    cn.setAttribute('id', 'screenCanvas');
    cn.style.position = 'absolute';
    cn.style.top = '0px';
    cn.style.left = '0px';
    cn.style.cursor = 'crosshair';
    cn.style.zIndex = '99999';
    cn.width = window.innerWidth;
    cn.height = window.innerHeight;
    cn.addEventListener('mousedown', this.mouseDown.bind(this), false);
    cn.addEventListener('mouseup', this.mouseUp.bind(this), false);
    cn.addEventListener('mousemove', this.mouseMove.bind(this), false);
    document.body.append(cn);
    this.canvas = cn;
    this.ctx = cn.getContext('2d');

  }

  reportIssueInJira() {
    this.imageUrl = '';
  }

  imgLoadHandler() {
    console.log('image loaded');

  }

  listenForJiraTrigger() {
    this.tabMenuIntegration.ticketOpenChanges.subscribe((data) => {
      if (data) {
        this.reportBug();
      }
    });
  }

  loadDefaultFormValues() {
    if (this.config && this.config.data && this.config.data.userName) {
      this.who = this.config.data.userName;
    }

    this.where = window.location.href;
    this.when = moment().format('DD-MMM-YYYY hh:mm:ss');
    
    
  }

  ngOnInit() {
    this.listenForJiraTrigger();

  }

}

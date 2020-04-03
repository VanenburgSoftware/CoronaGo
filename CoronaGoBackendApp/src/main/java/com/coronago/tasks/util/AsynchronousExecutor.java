package com.coronago.tasks.util;

import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Future;
import java.util.concurrent.SynchronousQueue;
import java.util.concurrent.ThreadFactory;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

import com.eva.base.logger.Logger;
import com.eva.base.logger.LoggerFactory;
import com.google.appengine.api.ThreadManager;

public class AsynchronousExecutor {
	private static final Logger LOGGER = LoggerFactory.getLogger(AsynchronousExecutor.class);
	private static final ThreadFactory factory = ThreadManager.currentRequestThreadFactory();
	private static final SynchronousQueue<Runnable> queue = new SynchronousQueue<Runnable>();
	private static final ExecutorService threadPool =
			new ThreadPoolExecutor(0, Integer.MAX_VALUE, 2L, TimeUnit.SECONDS, queue, factory);

	public static <T> Future<T> execute(final TaskExecution<T> execution) {
		Future<T> future = threadPool.submit(new Callable<T>() {
			@Override
			public T call() throws Exception {
				Thread thread = Thread.currentThread();
				LOGGER.info("Execution stared:" + thread.getName() + "::" + thread.getId());
				T response = execution.execute();
				LOGGER.info("Execution Completed:" + thread.getName() + "::" + thread.getId());
				return response;
			}
		});
		LOGGER.info("Task Submitted Successfully");
		return future;
	}

	public static abstract class TaskExecution<T> {
		public abstract T execute() throws Exception;
	}
}

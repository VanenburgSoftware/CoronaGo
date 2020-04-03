package com.coronago.tasks.executor;

import com.coronago.misc.model.Tasks;
import com.coronago.tasks.util.TasksExecutor;
import com.eva.base.logger.Logger;
import com.eva.base.logger.LoggerFactory;

public class TestTaskExecutor implements TasksExecutor{
	private static final Logger LOGGER = LoggerFactory.getLogger(TestTaskExecutor.class.getName());
	
	private void setVariables(Tasks task) {
		
	}

	@Override
	public boolean executeStep(Tasks tasksObj) {
		setVariables(tasksObj);
		LOGGER.info("completed");
		return false;
	}
}

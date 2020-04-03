package com.coronago.misc.logic;

import com.coronago.misc.enums.TasksStatus;
import com.coronago.misc.model.Tasks;
import com.coronago.misc.model.TasksBase;

public interface ITasksBL<T extends TasksBase> extends ITasksBLBase<T> {
	public void updateTaskStatus(T taskObj, TasksStatus completed);

	public void updateExecutionMetaData(Tasks taskObj);
}

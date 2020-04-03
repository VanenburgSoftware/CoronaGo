package com.coronago.misc.logic;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang3.StringUtils;

import com.coronago.misc.model.AppUserPrivileges;
import com.coronago.misc.model.DoctorActivityLog;
import com.coronago.util.DateUtil;
import com.eva.base.authentication.logic.IAppUserPrivilegeCache;
import com.eva.base.cache.CacheManager;
import com.eva.base.dal.CompositeFilter;
import com.eva.base.dal.Filter;
import com.eva.base.dal.SimpleFilter;
import com.eva.base.logger.Logger;
import com.eva.base.logger.LoggerFactory;
import com.eva.base.model.PaginationRequest;
import com.eva.base.model.PaginationResponse;
import com.vs.eva.gaelibrary.authentication.AppUserPrivilegeCache;

public class DoctorActivityLogBLImpl extends DoctorActivityLogBLBaseImpl<DoctorActivityLog>
		implements IDoctorActivityLogBL<DoctorActivityLog> {
	private static final Logger LOGGER = LoggerFactory.getLogger(DoctorActivityLogBLImpl.class.getName());
	private AppUserPrivilegeCache<AppUserPrivileges> userCache =
			CacheManager.getInstance().getCache(IAppUserPrivilegeCache.NAME);

	public DoctorActivityLogBLImpl() {
		super(DoctorActivityLog.class);
	}

	@Override
	public PaginationResponse getDoctorActivityLogAll_DoctorActivityLog(PaginationRequest dataTable, Long createdDt) {
		List<Filter> filters = dataTable.getFilters();
		if (filters == null) {
			filters = new ArrayList<>();
		}
		filters.add(new SimpleFilter("createdDate", DateUtil.getSearchDate(createdDt)));
		dataTable.setFilters(filters);
		return super.getDoctorActivityLogAll_DoctorActivityLog(dataTable);
	}

	@Override
	public DoctorActivityLog getDoctorActivityLogForCurrentDay(String doctorEmail) {
		Filter currentDateFilter =
				new SimpleFilter("createdDate", DateUtil.getStartOfCurrentDay(), Filter.Operator.GREATER_THAN_OR_EQUAL);
		Filter emailFilter = new SimpleFilter("doctorEmail", doctorEmail);
		Filter filter = CompositeFilter.and().add(currentDateFilter, emailFilter);
		List<Filter> filters = new ArrayList<Filter>(1);
		filters.add(filter);
		List<DoctorActivityLog> resultList = getAll(filters);
		if (resultList == null || resultList.size() == 0) { return null; }
		return resultList.get(0);
	}

	@Override
	public DoctorActivityLog updateNotScheduledPatients(String doctorEmail) {
		DoctorActivityLog activityLog = getDoctorActivityLogForCurrentDay(doctorEmail);
		if (activityLog == null) {
			activityLog = createActivityLog(doctorEmail);
			return activityLog;
		}
		activityLog.setNotScheduledPatients(activityLog.getNotScheduledPatients() + 1);
		update(activityLog);
		return activityLog;
	}

	@Override
	public DoctorActivityLog updateScheduledPatients(String doctorEmail) {
		DoctorActivityLog activityLog = getDoctorActivityLogForCurrentDay(doctorEmail);
		activityLog.setScheduledPatients(activityLog.getScheduledPatients() + 1);
		activityLog.setNotScheduledPatients(activityLog.getNotScheduledPatients() - 1);
		update(activityLog);
		return activityLog;
	}

	@Override
	public DoctorActivityLog updateConsultationCompleted(String doctorEmail) {
		DoctorActivityLog activityLog = getDoctorActivityLogForCurrentDay(doctorEmail);
		activityLog.setConsultationCompleteTest(activityLog.getConsultationCompleteTest() + 1);
		update(activityLog);
		return activityLog;
	}

	private DoctorActivityLog createActivityLog(String doctorEmail) {
		DoctorActivityLog activityLog = new DoctorActivityLog();
		activityLog.setDoctorEmail(doctorEmail);
		AppUserPrivileges docUser = userCache.get(doctorEmail);
		if (docUser != null) {
			activityLog.setDoctorName(docUser.getFirstName()
					+ (StringUtils.isNotBlank(docUser.getLastName()) ? (" " + docUser.getLastName())
							: StringUtils.EMPTY));
		} else {
			LOGGER.error("Doctor user is NULL :" + doctorEmail);
		}
		activityLog.setNotScheduledPatients(1L);
		activityLog.setScheduledPatients(0L);
		activityLog.setConsultationCompleteTest(0L);
		save(activityLog);
		return activityLog;
	}
}

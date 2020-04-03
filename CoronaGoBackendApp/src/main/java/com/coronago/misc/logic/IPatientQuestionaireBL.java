package com.coronago.misc.logic;

import com.coronago.misc.model.PatientQuestionaire;
import com.coronago.misc.model.PatientQuestionaireBase;

public interface IPatientQuestionaireBL<T extends PatientQuestionaireBase> extends IPatientQuestionaireBLBase<T> {
	public PatientQuestionaire getCurrentDayPatientQuestionaire(String email);

	public PatientQuestionaire submitPatientQuestionaire(PatientQuestionaire modelObj);

	public void generateSosReport(PatientQuestionaire modelObj);
}

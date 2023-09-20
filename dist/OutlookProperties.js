"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutlookProperties = void 0;
/* eslint-disable @typescript-eslint/camelcase */
// See PSTMessage.class for details on these properties
var OutlookProperties;
(function (OutlookProperties) {
    OutlookProperties[OutlookProperties["PSETID_Common"] = 1] = "PSETID_Common";
    OutlookProperties[OutlookProperties["PSETID_Address"] = 2] = "PSETID_Address";
    OutlookProperties[OutlookProperties["PSETID_Appointment"] = 4] = "PSETID_Appointment";
    OutlookProperties[OutlookProperties["PSETID_Meeting"] = 5] = "PSETID_Meeting";
    OutlookProperties[OutlookProperties["PSETID_Log"] = 6] = "PSETID_Log";
    OutlookProperties[OutlookProperties["PR_RTF_COMPRESSED"] = 4105] = "PR_RTF_COMPRESSED";
    OutlookProperties[OutlookProperties["PR_NON_RECEIPT_NOTIFICATION_REQUESTED"] = 3078] = "PR_NON_RECEIPT_NOTIFICATION_REQUESTED";
    OutlookProperties[OutlookProperties["PR_ORIGINATOR_NON_DELIVERY_REPORT_REQUESTED"] = 3080] = "PR_ORIGINATOR_NON_DELIVERY_REPORT_REQUESTED";
    OutlookProperties[OutlookProperties["PR_RECIPIENT_TYPE"] = 3093] = "PR_RECIPIENT_TYPE";
    OutlookProperties[OutlookProperties["PR_MESSAGE_CODEPAGE"] = 16381] = "PR_MESSAGE_CODEPAGE";
    OutlookProperties[OutlookProperties["PR_INTERNET_CPID"] = 16350] = "PR_INTERNET_CPID";
    OutlookProperties[OutlookProperties["PR_RTF_SYNC_BODY_CRC"] = 4102] = "PR_RTF_SYNC_BODY_CRC";
    OutlookProperties[OutlookProperties["PR_RTF_SYNC_BODY_COUNT"] = 4103] = "PR_RTF_SYNC_BODY_COUNT";
    OutlookProperties[OutlookProperties["PR_RTF_SYNC_BODY_TAG"] = 4104] = "PR_RTF_SYNC_BODY_TAG";
    OutlookProperties[OutlookProperties["PR_RTF_SYNC_PREFIX_COUNT"] = 4112] = "PR_RTF_SYNC_PREFIX_COUNT";
    OutlookProperties[OutlookProperties["PR_RTF_SYNC_TRAILING_COUNT"] = 4113] = "PR_RTF_SYNC_TRAILING_COUNT";
    OutlookProperties[OutlookProperties["PR_BODY"] = 4096] = "PR_BODY";
    OutlookProperties[OutlookProperties["PR_BODY_HTML"] = 4115] = "PR_BODY_HTML";
    OutlookProperties[OutlookProperties["PR_IMPORTANCE"] = 23] = "PR_IMPORTANCE";
    OutlookProperties[OutlookProperties["PR_MESSAGE_CLASS"] = 26] = "PR_MESSAGE_CLASS";
    OutlookProperties[OutlookProperties["PR_SUBJECT"] = 55] = "PR_SUBJECT";
    OutlookProperties[OutlookProperties["PR_CLIENT_SUBMIT_TIME"] = 57] = "PR_CLIENT_SUBMIT_TIME";
    OutlookProperties[OutlookProperties["PR_RECEIVED_BY_NAME"] = 64] = "PR_RECEIVED_BY_NAME";
    OutlookProperties[OutlookProperties["PR_SENT_REPRESENTING_NAME"] = 66] = "PR_SENT_REPRESENTING_NAME";
    OutlookProperties[OutlookProperties["PR_SENT_REPRESENTING_ADDRTYPE"] = 100] = "PR_SENT_REPRESENTING_ADDRTYPE";
    OutlookProperties[OutlookProperties["PR_SENT_REPRESENTING_EMAIL_ADDRESS"] = 101] = "PR_SENT_REPRESENTING_EMAIL_ADDRESS";
    OutlookProperties[OutlookProperties["PR_CONVERSATION_TOPIC"] = 112] = "PR_CONVERSATION_TOPIC";
    OutlookProperties[OutlookProperties["PR_RECEIVED_BY_ADDRTYPE"] = 117] = "PR_RECEIVED_BY_ADDRTYPE";
    OutlookProperties[OutlookProperties["PR_RECEIVED_BY_EMAIL_ADDRESS"] = 118] = "PR_RECEIVED_BY_EMAIL_ADDRESS";
    OutlookProperties[OutlookProperties["PR_TRANSPORT_MESSAGE_HEADERS"] = 125] = "PR_TRANSPORT_MESSAGE_HEADERS";
    OutlookProperties[OutlookProperties["PR_MESSAGE_FLAGS"] = 3591] = "PR_MESSAGE_FLAGS";
    OutlookProperties[OutlookProperties["PR_ORIGINATOR_DELIVERY_REPORT_REQUESTED"] = 35] = "PR_ORIGINATOR_DELIVERY_REPORT_REQUESTED";
    OutlookProperties[OutlookProperties["PR_PRIORITY"] = 38] = "PR_PRIORITY";
    OutlookProperties[OutlookProperties["PR_READ_RECEIPT_REQUESTED"] = 41] = "PR_READ_RECEIPT_REQUESTED";
    OutlookProperties[OutlookProperties["PR_RECIPIENT_REASSIGNMENT_PROHIBITED"] = 43] = "PR_RECIPIENT_REASSIGNMENT_PROHIBITED";
    OutlookProperties[OutlookProperties["PR_SENSITIVITY"] = 54] = "PR_SENSITIVITY";
    OutlookProperties[OutlookProperties["PR_ORIGINAL_SENSITIVITY"] = 46] = "PR_ORIGINAL_SENSITIVITY";
    OutlookProperties[OutlookProperties["PR_SENT_REPRESENTING_SEARCH_KEY"] = 59] = "PR_SENT_REPRESENTING_SEARCH_KEY";
    OutlookProperties[OutlookProperties["PR_RCVD_REPRESENTING_NAME"] = 68] = "PR_RCVD_REPRESENTING_NAME";
    OutlookProperties[OutlookProperties["PR_ORIGINAL_SUBJECT"] = 73] = "PR_ORIGINAL_SUBJECT";
    OutlookProperties[OutlookProperties["PR_REPLY_RECIPIENT_NAMES"] = 80] = "PR_REPLY_RECIPIENT_NAMES";
    OutlookProperties[OutlookProperties["PR_MESSAGE_TO_ME"] = 87] = "PR_MESSAGE_TO_ME";
    OutlookProperties[OutlookProperties["PR_MESSAGE_CC_ME"] = 88] = "PR_MESSAGE_CC_ME";
    OutlookProperties[OutlookProperties["PR_MESSAGE_RECIP_ME"] = 89] = "PR_MESSAGE_RECIP_ME";
    OutlookProperties[OutlookProperties["PR_RESPONSE_REQUESTED"] = 99] = "PR_RESPONSE_REQUESTED";
    OutlookProperties[OutlookProperties["PR_ORIGINAL_DISPLAY_BCC"] = 114] = "PR_ORIGINAL_DISPLAY_BCC";
    OutlookProperties[OutlookProperties["PR_ORIGINAL_DISPLAY_CC"] = 115] = "PR_ORIGINAL_DISPLAY_CC";
    OutlookProperties[OutlookProperties["PR_ORIGINAL_DISPLAY_TO"] = 116] = "PR_ORIGINAL_DISPLAY_TO";
    OutlookProperties[OutlookProperties["PR_RCVD_REPRESENTING_ADDRTYPE"] = 119] = "PR_RCVD_REPRESENTING_ADDRTYPE";
    OutlookProperties[OutlookProperties["PR_RCVD_REPRESENTING_EMAIL_ADDRESS"] = 120] = "PR_RCVD_REPRESENTING_EMAIL_ADDRESS";
    OutlookProperties[OutlookProperties["PR_REPLY_REQUESTED"] = 3095] = "PR_REPLY_REQUESTED";
    OutlookProperties[OutlookProperties["PR_SENDER_ENTRYID"] = 3097] = "PR_SENDER_ENTRYID";
    OutlookProperties[OutlookProperties["PR_SENDER_NAME"] = 3098] = "PR_SENDER_NAME";
    OutlookProperties[OutlookProperties["PR_SENDER_ADDRTYPE"] = 3102] = "PR_SENDER_ADDRTYPE";
    OutlookProperties[OutlookProperties["PR_SENDER_EMAIL_ADDRESS"] = 3103] = "PR_SENDER_EMAIL_ADDRESS";
    OutlookProperties[OutlookProperties["PR_MESSAGE_SIZE"] = 3592] = "PR_MESSAGE_SIZE";
    OutlookProperties[OutlookProperties["PR_INTERNET_ARTICLE_NUMBER"] = 3619] = "PR_INTERNET_ARTICLE_NUMBER";
    OutlookProperties[OutlookProperties["PR_PRIMARY_SEND_ACCOUNT"] = 3624] = "PR_PRIMARY_SEND_ACCOUNT";
    OutlookProperties[OutlookProperties["PR_NEXT_SEND_ACCT"] = 3625] = "PR_NEXT_SEND_ACCT";
    OutlookProperties[OutlookProperties["PR_OBJECT_TYPE"] = 4094] = "PR_OBJECT_TYPE";
    OutlookProperties[OutlookProperties["PR_DELETE_AFTER_SUBMIT"] = 3585] = "PR_DELETE_AFTER_SUBMIT";
    OutlookProperties[OutlookProperties["PR_RESPONSIBILITY"] = 3599] = "PR_RESPONSIBILITY";
    OutlookProperties[OutlookProperties["PR_RTF_IN_SYNC"] = 3615] = "PR_RTF_IN_SYNC";
    OutlookProperties[OutlookProperties["PR_DISPLAY_BCC"] = 3586] = "PR_DISPLAY_BCC";
    OutlookProperties[OutlookProperties["PR_DISPLAY_CC"] = 3587] = "PR_DISPLAY_CC";
    OutlookProperties[OutlookProperties["PR_DISPLAY_TO"] = 3588] = "PR_DISPLAY_TO";
    OutlookProperties[OutlookProperties["PR_MESSAGE_DELIVERY_TIME"] = 3590] = "PR_MESSAGE_DELIVERY_TIME";
    OutlookProperties[OutlookProperties["PR_INTERNET_MESSAGE_ID"] = 4149] = "PR_INTERNET_MESSAGE_ID";
    OutlookProperties[OutlookProperties["PR_IN_REPLY_TO_ID"] = 4162] = "PR_IN_REPLY_TO_ID";
    OutlookProperties[OutlookProperties["PR_INTERNET_RETURN_PATH"] = 4166] = "PR_INTERNET_RETURN_PATH";
    OutlookProperties[OutlookProperties["PR_ICON_INDEX"] = 4224] = "PR_ICON_INDEX";
    OutlookProperties[OutlookProperties["PR_LAST_VERB_EXECUTED"] = 4225] = "PR_LAST_VERB_EXECUTED";
    OutlookProperties[OutlookProperties["PR_LAST_VERB_EXECUTION_TIME"] = 4226] = "PR_LAST_VERB_EXECUTION_TIME";
    OutlookProperties[OutlookProperties["PR_URL_COMP_NAME"] = 4339] = "PR_URL_COMP_NAME";
    OutlookProperties[OutlookProperties["PR_ATTR_HIDDEN"] = 4340] = "PR_ATTR_HIDDEN";
    OutlookProperties[OutlookProperties["PR_EMAIL_ADDRESS"] = 12291] = "PR_EMAIL_ADDRESS";
    OutlookProperties[OutlookProperties["PR_ADDRTYPE"] = 12290] = "PR_ADDRTYPE";
    OutlookProperties[OutlookProperties["PR_COMMENT"] = 12292] = "PR_COMMENT";
    OutlookProperties[OutlookProperties["PR_CREATION_TIME"] = 12295] = "PR_CREATION_TIME";
    OutlookProperties[OutlookProperties["PR_LAST_MODIFICATION_TIME"] = 12296] = "PR_LAST_MODIFICATION_TIME";
    OutlookProperties[OutlookProperties["PR_ATTACH_DATA_BIN"] = 14081] = "PR_ATTACH_DATA_BIN";
    OutlookProperties[OutlookProperties["PR_ATTACH_SIZE"] = 3616] = "PR_ATTACH_SIZE";
    OutlookProperties[OutlookProperties["PR_ATTACH_FILENAME"] = 14084] = "PR_ATTACH_FILENAME";
    OutlookProperties[OutlookProperties["PR_ATTACH_NUM"] = 3617] = "PR_ATTACH_NUM";
    OutlookProperties[OutlookProperties["PR_ATTACH_METHOD"] = 14085] = "PR_ATTACH_METHOD";
    OutlookProperties[OutlookProperties["PR_ATTACH_LONG_FILENAME"] = 14087] = "PR_ATTACH_LONG_FILENAME";
    OutlookProperties[OutlookProperties["PR_ATTACH_PATHNAME"] = 14088] = "PR_ATTACH_PATHNAME";
    OutlookProperties[OutlookProperties["PR_RENDERING_POSITION"] = 14091] = "PR_RENDERING_POSITION";
    OutlookProperties[OutlookProperties["PR_ATTACH_LONG_PATHNAME"] = 14093] = "PR_ATTACH_LONG_PATHNAME";
    OutlookProperties[OutlookProperties["PR_ATTACH_MIME_TAG"] = 14094] = "PR_ATTACH_MIME_TAG";
    OutlookProperties[OutlookProperties["PR_ATTACH_MIME_SEQUENCE"] = 14096] = "PR_ATTACH_MIME_SEQUENCE";
    OutlookProperties[OutlookProperties["PR_ATTACH_CONTENT_ID"] = 14098] = "PR_ATTACH_CONTENT_ID";
    OutlookProperties[OutlookProperties["PR_ATTACH_FLAGS"] = 14100] = "PR_ATTACH_FLAGS";
    OutlookProperties[OutlookProperties["PR_ACCOUNT"] = 14848] = "PR_ACCOUNT";
    OutlookProperties[OutlookProperties["PR_CALLBACK_TELEPHONE_NUMBER"] = 14850] = "PR_CALLBACK_TELEPHONE_NUMBER";
    OutlookProperties[OutlookProperties["PR_GENERATION"] = 14853] = "PR_GENERATION";
    OutlookProperties[OutlookProperties["PR_GIVEN_NAME"] = 14854] = "PR_GIVEN_NAME";
    OutlookProperties[OutlookProperties["PR_GOVERNMENT_ID_NUMBER"] = 14855] = "PR_GOVERNMENT_ID_NUMBER";
    OutlookProperties[OutlookProperties["PR_BUSINESS_TELEPHONE_NUMBER"] = 14856] = "PR_BUSINESS_TELEPHONE_NUMBER";
    OutlookProperties[OutlookProperties["PR_HOME_TELEPHONE_NUMBER"] = 14857] = "PR_HOME_TELEPHONE_NUMBER";
    OutlookProperties[OutlookProperties["PR_INITIALS"] = 14858] = "PR_INITIALS";
    OutlookProperties[OutlookProperties["PR_KEYWORD"] = 14859] = "PR_KEYWORD";
    OutlookProperties[OutlookProperties["PR_LANGUAGE"] = 14860] = "PR_LANGUAGE";
    OutlookProperties[OutlookProperties["PR_LOCATION"] = 14861] = "PR_LOCATION";
    OutlookProperties[OutlookProperties["PR_MHS_COMMON_NAME"] = 14863] = "PR_MHS_COMMON_NAME";
    OutlookProperties[OutlookProperties["PR_ORGANIZATIONAL_ID_NUMBER"] = 14864] = "PR_ORGANIZATIONAL_ID_NUMBER";
    OutlookProperties[OutlookProperties["PR_SURNAME"] = 14865] = "PR_SURNAME";
    OutlookProperties[OutlookProperties["PR_ORIGINAL_DISPLAY_NAME"] = 14867] = "PR_ORIGINAL_DISPLAY_NAME";
    OutlookProperties[OutlookProperties["PR_POSTAL_ADDRESS"] = 14869] = "PR_POSTAL_ADDRESS";
    OutlookProperties[OutlookProperties["PT_UNICODE"] = 14870] = "PT_UNICODE";
    OutlookProperties[OutlookProperties["PR_TITLE"] = 14871] = "PR_TITLE";
    OutlookProperties[OutlookProperties["PR_DEPARTMENT_NAME"] = 14872] = "PR_DEPARTMENT_NAME";
    OutlookProperties[OutlookProperties["PR_OFFICE_LOCATION"] = 14873] = "PR_OFFICE_LOCATION";
    OutlookProperties[OutlookProperties["PR_PRIMARY_TELEPHONE_NUMBER"] = 14874] = "PR_PRIMARY_TELEPHONE_NUMBER";
    OutlookProperties[OutlookProperties["PR_BUSINESS2_TELEPHONE_NUMBER"] = 14875] = "PR_BUSINESS2_TELEPHONE_NUMBER";
    OutlookProperties[OutlookProperties["PR_MOBILE_TELEPHONE_NUMBER"] = 14876] = "PR_MOBILE_TELEPHONE_NUMBER";
    OutlookProperties[OutlookProperties["PR_RADIO_TELEPHONE_NUMBER"] = 14877] = "PR_RADIO_TELEPHONE_NUMBER";
    OutlookProperties[OutlookProperties["PR_CAR_TELEPHONE_NUMBER"] = 14878] = "PR_CAR_TELEPHONE_NUMBER";
    OutlookProperties[OutlookProperties["PR_OTHER_TELEPHONE_NUMBER"] = 14879] = "PR_OTHER_TELEPHONE_NUMBER";
    OutlookProperties[OutlookProperties["PR_TRANSMITABLE_DISPLAY_NAME"] = 14880] = "PR_TRANSMITABLE_DISPLAY_NAME";
    OutlookProperties[OutlookProperties["PR_PAGER_TELEPHONE_NUMBER"] = 14881] = "PR_PAGER_TELEPHONE_NUMBER";
    OutlookProperties[OutlookProperties["PR_PRIMARY_FAX_NUMBER"] = 14883] = "PR_PRIMARY_FAX_NUMBER";
    OutlookProperties[OutlookProperties["PR_BUSINESS_FAX_NUMBER"] = 14884] = "PR_BUSINESS_FAX_NUMBER";
    OutlookProperties[OutlookProperties["PR_HOME_FAX_NUMBER"] = 14885] = "PR_HOME_FAX_NUMBER";
    OutlookProperties[OutlookProperties["PR_COUNTRY"] = 14886] = "PR_COUNTRY";
    OutlookProperties[OutlookProperties["PR_LOCALITY"] = 14887] = "PR_LOCALITY";
    OutlookProperties[OutlookProperties["PR_STATE_OR_PROVINCE"] = 14888] = "PR_STATE_OR_PROVINCE";
    OutlookProperties[OutlookProperties["PR_STREET_ADDRESS"] = 14889] = "PR_STREET_ADDRESS";
    OutlookProperties[OutlookProperties["PR_POSTAL_CODE"] = 14890] = "PR_POSTAL_CODE";
    OutlookProperties[OutlookProperties["PR_POST_OFFICE_BOX"] = 14891] = "PR_POST_OFFICE_BOX";
    OutlookProperties[OutlookProperties["PR_TELEX_NUMBER"] = 14892] = "PR_TELEX_NUMBER";
    OutlookProperties[OutlookProperties["PR_ISDN_NUMBER"] = 14893] = "PR_ISDN_NUMBER";
    OutlookProperties[OutlookProperties["PR_ASSISTANT_TELEPHONE_NUMBER"] = 14894] = "PR_ASSISTANT_TELEPHONE_NUMBER";
    OutlookProperties[OutlookProperties["PR_HOME2_TELEPHONE_NUMBER"] = 14895] = "PR_HOME2_TELEPHONE_NUMBER";
    OutlookProperties[OutlookProperties["PR_ASSISTANT"] = 14896] = "PR_ASSISTANT";
    OutlookProperties[OutlookProperties["PR_HOBBIES"] = 14915] = "PR_HOBBIES";
    OutlookProperties[OutlookProperties["PR_MIDDLE_NAME"] = 14916] = "PR_MIDDLE_NAME";
    OutlookProperties[OutlookProperties["PR_DISPLAY_NAME_PREFIX"] = 14917] = "PR_DISPLAY_NAME_PREFIX";
    OutlookProperties[OutlookProperties["PR_PROFESSION"] = 14918] = "PR_PROFESSION";
    OutlookProperties[OutlookProperties["PR_REFERRED_BY_NAME"] = 14919] = "PR_REFERRED_BY_NAME";
    OutlookProperties[OutlookProperties["PR_SPOUSE_NAME"] = 14920] = "PR_SPOUSE_NAME";
    OutlookProperties[OutlookProperties["PR_COMPUTER_NETWORK_NAME"] = 14921] = "PR_COMPUTER_NETWORK_NAME";
    OutlookProperties[OutlookProperties["PR_CUSTOMER_ID"] = 14922] = "PR_CUSTOMER_ID";
    OutlookProperties[OutlookProperties["PR_TTYTDD_PHONE_NUMBER"] = 14923] = "PR_TTYTDD_PHONE_NUMBER";
    OutlookProperties[OutlookProperties["PR_FTP_SITE"] = 14924] = "PR_FTP_SITE";
    OutlookProperties[OutlookProperties["PR_MANAGER_NAME"] = 14926] = "PR_MANAGER_NAME";
    OutlookProperties[OutlookProperties["PR_NICKNAME"] = 14927] = "PR_NICKNAME";
    OutlookProperties[OutlookProperties["PR_PERSONAL_HOME_PAGE"] = 14928] = "PR_PERSONAL_HOME_PAGE";
    OutlookProperties[OutlookProperties["PR_BUSINESS_HOME_PAGE"] = 14929] = "PR_BUSINESS_HOME_PAGE";
    OutlookProperties[OutlookProperties["PR_COMPANY_MAIN_PHONE_NUMBER"] = 14935] = "PR_COMPANY_MAIN_PHONE_NUMBER";
    OutlookProperties[OutlookProperties["PR_CHILDRENS_NAMES"] = 14936] = "PR_CHILDRENS_NAMES";
    OutlookProperties[OutlookProperties["PR_HOME_ADDRESS_CITY"] = 14937] = "PR_HOME_ADDRESS_CITY";
    OutlookProperties[OutlookProperties["PR_HOME_ADDRESS_COUNTRY"] = 14938] = "PR_HOME_ADDRESS_COUNTRY";
    OutlookProperties[OutlookProperties["PR_HOME_ADDRESS_POSTAL_CODE"] = 14939] = "PR_HOME_ADDRESS_POSTAL_CODE";
    OutlookProperties[OutlookProperties["PR_HOME_ADDRESS_STATE_OR_PROVINCE"] = 14940] = "PR_HOME_ADDRESS_STATE_OR_PROVINCE";
    OutlookProperties[OutlookProperties["PR_HOME_ADDRESS_STREET"] = 14941] = "PR_HOME_ADDRESS_STREET";
    OutlookProperties[OutlookProperties["PR_HOME_ADDRESS_POST_OFFICE_BOX"] = 14942] = "PR_HOME_ADDRESS_POST_OFFICE_BOX";
    OutlookProperties[OutlookProperties["PR_OTHER_ADDRESS_CITY"] = 14943] = "PR_OTHER_ADDRESS_CITY";
    OutlookProperties[OutlookProperties["PR_OTHER_ADDRESS_COUNTRY"] = 14944] = "PR_OTHER_ADDRESS_COUNTRY";
    OutlookProperties[OutlookProperties["PR_OTHER_ADDRESS_POSTAL_CODE"] = 14945] = "PR_OTHER_ADDRESS_POSTAL_CODE";
    OutlookProperties[OutlookProperties["PR_OTHER_ADDRESS_STATE_OR_PROVINCE"] = 14946] = "PR_OTHER_ADDRESS_STATE_OR_PROVINCE";
    OutlookProperties[OutlookProperties["PR_OTHER_ADDRESS_STREET"] = 14947] = "PR_OTHER_ADDRESS_STREET";
    OutlookProperties[OutlookProperties["PR_OTHER_ADDRESS_POST_OFFICE_BOX"] = 14948] = "PR_OTHER_ADDRESS_POST_OFFICE_BOX";
    OutlookProperties[OutlookProperties["PR_FOLDER_TYPE"] = 13825] = "PR_FOLDER_TYPE";
    OutlookProperties[OutlookProperties["PR_CONTENT_COUNT"] = 13826] = "PR_CONTENT_COUNT";
    OutlookProperties[OutlookProperties["PR_CONTENT_UNREAD"] = 13827] = "PR_CONTENT_UNREAD";
    OutlookProperties[OutlookProperties["PR_SUBFOLDERS"] = 13834] = "PR_SUBFOLDERS";
    OutlookProperties[OutlookProperties["PR_CONTAINER_CLASS"] = 13843] = "PR_CONTAINER_CLASS";
    OutlookProperties[OutlookProperties["PR_CONTAINER_FLAGS"] = 13824] = "PR_CONTAINER_FLAGS";
    OutlookProperties[OutlookProperties["PR_DISPLAY_NAME"] = 12289] = "PR_DISPLAY_NAME";
    OutlookProperties[OutlookProperties["PR_RECIPIENT_FLAGS"] = 24573] = "PR_RECIPIENT_FLAGS";
    OutlookProperties[OutlookProperties["PR_SMTP_ADDRESS"] = 14846] = "PR_SMTP_ADDRESS";
    OutlookProperties[OutlookProperties["PidTagRecipientOrder"] = 24543] = "PidTagRecipientOrder";
    OutlookProperties[OutlookProperties["PidTagConversationId"] = 12307] = "PidTagConversationId";
    OutlookProperties[OutlookProperties["PidTagConversationIndexTracking"] = 12310] = "PidTagConversationIndexTracking";
    OutlookProperties[OutlookProperties["PidLidLogType"] = 34560] = "PidLidLogType";
    OutlookProperties[OutlookProperties["PidLidTaskStartDate"] = 33028] = "PidLidTaskStartDate";
    OutlookProperties[OutlookProperties["PidLidTaskDueDate"] = 33029] = "PidLidTaskDueDate";
    OutlookProperties[OutlookProperties["PidLidReminderSet"] = 34051] = "PidLidReminderSet";
    OutlookProperties[OutlookProperties["PidLidReminderDelta"] = 34049] = "PidLidReminderDelta";
    OutlookProperties[OutlookProperties["PidLidLogStart"] = 34566] = "PidLidLogStart";
    OutlookProperties[OutlookProperties["PidLidLogDuration"] = 34567] = "PidLidLogDuration";
    OutlookProperties[OutlookProperties["PidLidLogEnd"] = 34568] = "PidLidLogEnd";
    OutlookProperties[OutlookProperties["PidLidLogFlags"] = 34572] = "PidLidLogFlags";
    OutlookProperties[OutlookProperties["PidLidLogDocumentPrinted"] = 34574] = "PidLidLogDocumentPrinted";
    OutlookProperties[OutlookProperties["PidLidLogDocumentSaved"] = 34575] = "PidLidLogDocumentSaved";
    OutlookProperties[OutlookProperties["PidLidLogDocumentRouted"] = 34576] = "PidLidLogDocumentRouted";
    OutlookProperties[OutlookProperties["PidLidLogDocumentPosted"] = 34577] = "PidLidLogDocumentPosted";
    OutlookProperties[OutlookProperties["PidLidLogTypeDesc"] = 34578] = "PidLidLogTypeDesc";
    OutlookProperties[OutlookProperties["PidLidSendMeetingAsIcal"] = 33280] = "PidLidSendMeetingAsIcal";
    OutlookProperties[OutlookProperties["PidLidBusyStatus"] = 33285] = "PidLidBusyStatus";
    OutlookProperties[OutlookProperties["PidLidLocation"] = 33288] = "PidLidLocation";
    OutlookProperties[OutlookProperties["PidLidAppointmentStartWhole"] = 33293] = "PidLidAppointmentStartWhole";
    OutlookProperties[OutlookProperties["PidLidAppointmentEndWhole"] = 33294] = "PidLidAppointmentEndWhole";
    OutlookProperties[OutlookProperties["PidLidAppointmentDuration"] = 33299] = "PidLidAppointmentDuration";
    OutlookProperties[OutlookProperties["PidLidAppointmentColor"] = 33300] = "PidLidAppointmentColor";
    OutlookProperties[OutlookProperties["PidLidAppointmentSubType"] = 33301] = "PidLidAppointmentSubType";
    OutlookProperties[OutlookProperties["PidLidAppointmentStateFlags"] = 33303] = "PidLidAppointmentStateFlags";
    OutlookProperties[OutlookProperties["PidLidResponseStatus"] = 33304] = "PidLidResponseStatus";
    OutlookProperties[OutlookProperties["PidLidRecurring"] = 33315] = "PidLidRecurring";
    OutlookProperties[OutlookProperties["PidLidExceptionReplaceTime"] = 33320] = "PidLidExceptionReplaceTime";
    OutlookProperties[OutlookProperties["PidLidRecurrenceType"] = 33329] = "PidLidRecurrenceType";
    OutlookProperties[OutlookProperties["PidLidRecurrencePattern"] = 33330] = "PidLidRecurrencePattern";
    OutlookProperties[OutlookProperties["PidLidAppointmentRecur"] = 33302] = "PidLidAppointmentRecur";
    OutlookProperties[OutlookProperties["PidLidTimeZoneStruct"] = 33331] = "PidLidTimeZoneStruct";
    OutlookProperties[OutlookProperties["PidLidAllAttendeesString"] = 33336] = "PidLidAllAttendeesString";
    OutlookProperties[OutlookProperties["PidLidToAttendeesString"] = 33339] = "PidLidToAttendeesString";
    OutlookProperties[OutlookProperties["PidLidCcAttendeesString"] = 33340] = "PidLidCcAttendeesString";
    OutlookProperties[OutlookProperties["PidLidAppointmentSequence"] = 33281] = "PidLidAppointmentSequence";
    OutlookProperties[OutlookProperties["PidLidConferencingCheck"] = 33344] = "PidLidConferencingCheck";
    OutlookProperties[OutlookProperties["PidLidConferencingType"] = 33345] = "PidLidConferencingType";
    OutlookProperties[OutlookProperties["PidLidDirectory"] = 33346] = "PidLidDirectory";
    OutlookProperties[OutlookProperties["PidLidOrganizerAlias"] = 33347] = "PidLidOrganizerAlias";
    OutlookProperties[OutlookProperties["PidLidNetShowUrl"] = 33352] = "PidLidNetShowUrl";
    OutlookProperties[OutlookProperties["PidLidCollaborateDoc"] = 33351] = "PidLidCollaborateDoc";
    OutlookProperties[OutlookProperties["PidLidAttendeeCriticalChange"] = 1] = "PidLidAttendeeCriticalChange";
    OutlookProperties[OutlookProperties["PidLidAppointmentCounterProposal"] = 33367] = "PidLidAppointmentCounterProposal";
    OutlookProperties[OutlookProperties["PidLidIsSilent"] = 4] = "PidLidIsSilent";
    OutlookProperties[OutlookProperties["PidLidRequiredAttendees"] = 6] = "PidLidRequiredAttendees";
    OutlookProperties[OutlookProperties["PidTagMessageLocaleId"] = 16369] = "PidTagMessageLocaleId";
    OutlookProperties[OutlookProperties["PidLidFileUnder"] = 32773] = "PidLidFileUnder";
    OutlookProperties[OutlookProperties["PidLidHomeAddress"] = 32794] = "PidLidHomeAddress";
    OutlookProperties[OutlookProperties["PidLidWorkAddress"] = 32795] = "PidLidWorkAddress";
    OutlookProperties[OutlookProperties["PidLidOtherAddress"] = 32796] = "PidLidOtherAddress";
    OutlookProperties[OutlookProperties["PidLidPostalAddressId"] = 32802] = "PidLidPostalAddressId";
    OutlookProperties[OutlookProperties["PidLidHtml"] = 32811] = "PidLidHtml";
    OutlookProperties[OutlookProperties["PidLidWorkAddressStreet"] = 32837] = "PidLidWorkAddressStreet";
    OutlookProperties[OutlookProperties["PidLidWorkAddressCity"] = 32838] = "PidLidWorkAddressCity";
    OutlookProperties[OutlookProperties["PidLidWorkAddressState"] = 32839] = "PidLidWorkAddressState";
    OutlookProperties[OutlookProperties["PidLidWorkAddressPostalCode"] = 32840] = "PidLidWorkAddressPostalCode";
    OutlookProperties[OutlookProperties["PidLidWorkAddressCountry"] = 32841] = "PidLidWorkAddressCountry";
    OutlookProperties[OutlookProperties["PidLidWorkAddressPostOfficeBox"] = 32842] = "PidLidWorkAddressPostOfficeBox";
    OutlookProperties[OutlookProperties["PidLidInstantMessagingAddress"] = 32866] = "PidLidInstantMessagingAddress";
    OutlookProperties[OutlookProperties["PidLidEmail1DisplayName"] = 32896] = "PidLidEmail1DisplayName";
    OutlookProperties[OutlookProperties["PidLidEmail1AddressType"] = 32898] = "PidLidEmail1AddressType";
    OutlookProperties[OutlookProperties["PidLidEmail1EmailAddress"] = 32899] = "PidLidEmail1EmailAddress";
    OutlookProperties[OutlookProperties["PidLidEmail1OriginalDisplayName"] = 32900] = "PidLidEmail1OriginalDisplayName";
    OutlookProperties[OutlookProperties["PidLidEmail2DisplayName"] = 32912] = "PidLidEmail2DisplayName";
    OutlookProperties[OutlookProperties["PidLidEmail2AddressType"] = 32914] = "PidLidEmail2AddressType";
    OutlookProperties[OutlookProperties["PidLidEmail2EmailAddress"] = 32915] = "PidLidEmail2EmailAddress";
    OutlookProperties[OutlookProperties["PidLidEmail2OriginalDisplayName"] = 32916] = "PidLidEmail2OriginalDisplayName";
    OutlookProperties[OutlookProperties["PidLidEmail3DisplayName"] = 32928] = "PidLidEmail3DisplayName";
    OutlookProperties[OutlookProperties["PidLidEmail3AddressType"] = 32930] = "PidLidEmail3AddressType";
    OutlookProperties[OutlookProperties["PidLidEmail3EmailAddress"] = 32931] = "PidLidEmail3EmailAddress";
    OutlookProperties[OutlookProperties["PidLidEmail3OriginalDisplayName"] = 32932] = "PidLidEmail3OriginalDisplayName";
    OutlookProperties[OutlookProperties["PidLidFax1AddressType"] = 32946] = "PidLidFax1AddressType";
    OutlookProperties[OutlookProperties["PidLidFax1EmailAddress"] = 32947] = "PidLidFax1EmailAddress";
    OutlookProperties[OutlookProperties["PidLidFax1OriginalDisplayName"] = 32948] = "PidLidFax1OriginalDisplayName";
    OutlookProperties[OutlookProperties["PidLidFax2AddressType"] = 32962] = "PidLidFax2AddressType";
    OutlookProperties[OutlookProperties["PidLidFax2EmailAddress"] = 32963] = "PidLidFax2EmailAddress";
    OutlookProperties[OutlookProperties["PidLidFax2OriginalDisplayName"] = 32964] = "PidLidFax2OriginalDisplayName";
    OutlookProperties[OutlookProperties["PidLidFax3AddressType"] = 32978] = "PidLidFax3AddressType";
    OutlookProperties[OutlookProperties["PidLidFax3EmailAddress"] = 32979] = "PidLidFax3EmailAddress";
    OutlookProperties[OutlookProperties["PidLidFax3OriginalDisplayName"] = 32980] = "PidLidFax3OriginalDisplayName";
    OutlookProperties[OutlookProperties["PidLidFreeBusyLocation"] = 32984] = "PidLidFreeBusyLocation";
    OutlookProperties[OutlookProperties["PidTagBirthday"] = 14914] = "PidTagBirthday";
    OutlookProperties[OutlookProperties["PidTagWeddingAnniversary"] = 14913] = "PidTagWeddingAnniversary";
    OutlookProperties[OutlookProperties["PidLidPercentComplete"] = 33026] = "PidLidPercentComplete";
    OutlookProperties[OutlookProperties["PidLidTaskStatus"] = 33025] = "PidLidTaskStatus";
    OutlookProperties[OutlookProperties["PidLidTaskDeadOccurrence"] = 33033] = "PidLidTaskDeadOccurrence";
    OutlookProperties[OutlookProperties["PidLidTaskDateCompleted"] = 33039] = "PidLidTaskDateCompleted";
    OutlookProperties[OutlookProperties["PidLidTaskActualEffort"] = 33040] = "PidLidTaskActualEffort";
    OutlookProperties[OutlookProperties["PidLidTaskEstimatedEffort"] = 33041] = "PidLidTaskEstimatedEffort";
    OutlookProperties[OutlookProperties["PidLidTaskVersion"] = 33042] = "PidLidTaskVersion";
    OutlookProperties[OutlookProperties["PidLidTaskRecurrence"] = 33046] = "PidLidTaskRecurrence";
    OutlookProperties[OutlookProperties["PidLidTaskComplete"] = 33052] = "PidLidTaskComplete";
    OutlookProperties[OutlookProperties["PidLidTaskOwner"] = 33055] = "PidLidTaskOwner";
    OutlookProperties[OutlookProperties["PidLidTaskAssigner"] = 33057] = "PidLidTaskAssigner";
    OutlookProperties[OutlookProperties["PidLidTaskLastUser"] = 33058] = "PidLidTaskLastUser";
    OutlookProperties[OutlookProperties["PidLidTaskOrdinal"] = 33059] = "PidLidTaskOrdinal";
    OutlookProperties[OutlookProperties["PidLidTaskFRecurring"] = 33062] = "PidLidTaskFRecurring";
    OutlookProperties[OutlookProperties["PidLidTaskOwnership"] = 33065] = "PidLidTaskOwnership";
    OutlookProperties[OutlookProperties["PidLidTaskAcceptanceState"] = 33066] = "PidLidTaskAcceptanceState";
})(OutlookProperties = exports.OutlookProperties || (exports.OutlookProperties = {}));
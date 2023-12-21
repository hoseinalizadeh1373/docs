/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// module.exports = {
// // By default, Docusaurus generates a sidebar from the docs folder structure
// tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

// // But you can create a sidebar manually
// /*
// tutorialSidebar: [
// {
// type: 'category',
// label: 'Tutorial',
// items: ['hello'],
// },
// ],
// */
// };


module.exports = {
	// DocSidebar: [
	// {
	// type: 'autogenerated',
	// dirName: 'simotel'
	// },
	// ],

	Autodialer: [
		{
			type: 'category',
			label: 'تماس انبوه',
			items: [
				'autodialer/introad',
				'autodialer/contacts',
				'autodialer/groups',
				'autodialer/announcements',
				'autodialer/trunk_manager',
				'autodialer/campaigns',
				'autodialer/reports',
				'autodialer/dialer.ini',

			],
		},
	],


	// API: [

	// {
	// type: 'autogenerated',
	// dirName: 'api'
	// },
	// ],

	/////////////////////////////////// API SimoTel Sidebar//////////////////////////////////
	docs: [

		'developers/api/introapi',
		{
			type: 'category',
			label: 'Simotel Api',
			items: [
				'developers/api/SimotelAPI/v4/settings',
				'developers/api/SimotelAPI/v4/ping',
				'developers/api/SimotelAPI/v4/call-originate',
				{
					'کاربر': ['developers/api/SimotelAPI/v4/users/users_add',
						'developers/api/SimotelAPI/v4/users/users_search',
						'developers/api/SimotelAPI/v4/users/users_edit',
						'developers/api/SimotelAPI/v4/users/users_remove',
					],
					'ترانک': ['developers/api/SimotelAPI/v4/trunks/trunks_add',
						'developers/api/SimotelAPI/v4/trunks/trunks_search',
						'developers/api/SimotelAPI/v4/trunks/trunks_edit',
						'developers/api/SimotelAPI/v4/trunks/trunks_remove',
					],
					'صف': ['developers/api/SimotelAPI/v4/queues/queues_add',
						'developers/api/SimotelAPI/v4/queues/queues_search',
						'developers/api/SimotelAPI/v4/queues/queues_edit',
						'developers/api/SimotelAPI/v4/queues/queues_remove',
						'developers/api/SimotelAPI/v4/queues/queue_addagent',
						'developers/api/SimotelAPI/v4/queues/queue_pauseagent',
						'developers/api/SimotelAPI/v4/queues/queue_resumagent',
						'developers/api/SimotelAPI/v4/queues/queue_removeagent',
						'developers/api/SimotelAPI/v4/queues/queue_batchaddagent',
						'developers/api/SimotelAPI/v4/queues/queue_batchpauseagent',
						'developers/api/SimotelAPI/v4/queues/queue_batchresumagent',
						'developers/api/SimotelAPI/v4/queues/queue_batchremoveagent',
					],
					'موزیک انتظار': ['developers/api/SimotelAPI/v4/musiconhold/musiconhold_search'
					],
					'آوا': ['developers/api/SimotelAPI/v4/announcement/announcements_upload',
						'developers/api/SimotelAPI/v4/announcement/announcements_add',
						'developers/api/SimotelAPI/v4/announcement/announcements_search',
						'developers/api/SimotelAPI/v4/announcement/announcements_edit',
						'developers/api/SimotelAPI/v4/announcement/announcements_remove',
					],
					'صندوق‌صوتی': ['developers/api/SimotelAPI/v4/voicemail/voicemail_add',
						'developers/api/SimotelAPI/v4/voicemail/voicemail_search',
						'developers/api/SimotelAPI/v4/voicemail/voicemail_edit',
						'developers/api/SimotelAPI/v4/voicemail/voicemail_remove',
						'developers/api/SimotelAPI/v4/voicemail/inbox_search',
						'developers/api/SimotelAPI/v4/voicemail/inbox_download',
					],
					'لیست‌سیاه': ['developers/api/SimotelAPI/v4/blacklist/blacklist_add',
						'developers/api/SimotelAPI/v4/blacklist/blacklist_search',
						'developers/api/SimotelAPI/v4/blacklist/blacklist_edit',
						'developers/api/SimotelAPI/v4/blacklist/blacklist_remove',
					],
					'لیست‌سفید': ['developers/api/SimotelAPI/v4/whitelist/whitelist_add',
						'developers/api/SimotelAPI/v4/whitelist/whitelist_search',
						'developers/api/SimotelAPI/v4/whitelist/whitelist_edit',
						'developers/api/SimotelAPI/v4/whitelist/whitelist_remove',
					],
					'فکس': ['developers/api/SimotelAPI/v4/fax/fax_upload',
						'developers/api/SimotelAPI/v4/fax/fax_add',
						'developers/api/SimotelAPI/v4/fax/fax_search',
						'developers/api/SimotelAPI/v4/fax/fax_download',
					],
					'گزارشات': ['developers/api/SimotelAPI/v4/report/quick_search',
						'developers/api/SimotelAPI/v4/report/quick_info',
						'developers/api/SimotelAPI/v4/report/audio_download',
						'developers/api/SimotelAPI/v4/report/report_cdr_search',
						'developers/api/SimotelAPI/v4/report/report_cdr_ordered_id',
						'developers/api/SimotelAPI/v4/report/queue_search',
						'developers/api/SimotelAPI/v4/report/queue_search_ordered_id',
						'developers/api/SimotelAPI/v4/report/queue_details_search',
						'developers/api/SimotelAPI/v4/report/queue_details_ordered_id',
						'developers/api/SimotelAPI/v4/report/agent_search',
						'developers/api/SimotelAPI/v4/report/report_poll',
					],
				},
			]
		},
		{
			type: 'category',
			label: 'Simotel WebHooks',
			items: [
				'developers/api/SimotelWebHooks/whatis',
				{
					'Events': ['developers/api/SimotelWebHooks/Events/setting', 'developers/api/SimotelWebHooks/Events/transfer', 'developers/api/SimotelWebHooks/Events/incoming_call', 'developers/api/SimotelWebHooks/Events/outgoing_call', 'developers/api/SimotelWebHooks/Events/exten_added', 'developers/api/SimotelWebHooks/Events/exten_remove', 'developers/api/SimotelWebHooks/Events/incoming_fax', 'developers/api/SimotelWebHooks/Events/outgoing_fax', 'developers/api/SimotelWebHooks/Events/cdr_queue', 'developers/api/SimotelWebHooks/Events/voicemail', 'developers/api/SimotelWebHooks/Events/voicemail_email', 'developers/api/SimotelWebHooks/Events/survey', 'developers/api/SimotelWebHooks/Events/cdr', 'developers/api/SimotelWebHooks/Events/TrunkNewState', 'developers/api/SimotelWebHooks/Events/TrunkAdded', 'developers/api/SimotelWebHooks/Events/TrunkRemoved', 'developers/api/SimotelWebHooks/Events/AutoDialerReport', 'developers/api/SimotelWebHooks/Events/new_state',],
					'Component Api': ['developers/api/SimotelWebHooks/DialplanApiComponents/whatis', , 'developers/api/SimotelWebHooks/DialplanApiComponents/setting', 'developers/api/SimotelWebHooks/DialplanApiComponents/exten_api', 'developers/api/SimotelWebHooks/DialplanApiComponents/trunk_api', 'developers/api/SimotelWebHooks/DialplanApiComponents/ivr_api', 'developers/api/SimotelWebHooks/DialplanApiComponents/smart_api'],
				}
			],
		},
		//    {
		// 		type: 'category',
		// 		 label: 'کامپوننت‌های API',
		// 		 items: ['developers/api/APIComponents/setting','developers/api/APIComponents/exten_api','developers/api/APIComponents/trunk_api','developers/api/APIComponents/ivr_api','developers/api/APIComponents/smart_api',],
		//    },
		{
			type: 'category',
			label: 'مثال‌های کاربردی',
			items: ['developers/api/Scenarios/smart_api', 'developers/api/Scenarios/exten_api', 'developers/api/Scenarios/call_originate'],
		},





		/////////////////////////////////// API SimoTel Sidebar//////////////////////////////////


		{
			'ماژول تماس‌انبوه': [
				'developers/api/Autodialer_API/introautodialer',
				{
					'مخاطبین': ['developers/api/Autodialer_API/contact/contact_add', 'developers/api/Autodialer_API/contact/contact_search', 'developers/api/Autodialer_API/contact/contact_edit', 'developers/api/Autodialer_API/contact/contact_delete',],
					'گروه‌ها': ['developers/api/Autodialer_API/group/group_upload', 'developers/api/Autodialer_API/group/group_add', 'developers/api/Autodialer_API/group/group_search', 'developers/api/Autodialer_API/group/group_edit', 'developers/api/Autodialer_API/group/group_delete',],
					'کمپین': ['developers/api/Autodialer_API/campaign/campaign_add', 'developers/api/Autodialer_API/campaign/campaign_search', 'developers/api/Autodialer_API/campaign/campaign_edit', 'developers/api/Autodialer_API/campaign/campaign_delete',],
					'آواها': ['developers/api/Autodialer_API/announcement/announcement_upload', 'developers/api/Autodialer_API/announcement/announcement_add', 'developers/api/Autodialer_API/announcement/announcement_search', 'developers/api/Autodialer_API/announcement/announcement_edit', 'developers/api/Autodialer_API/announcement/announcement_delete',],
					'ترانک': ['developers/api/Autodialer_API/trunk_manager/trunk_manager_search', 'developers/api/Autodialer_API/trunk_manager/trunk_manager_edit',],
					'گزارشات': ['developers/api/Autodialer_API/report/report_search', 'developers/api/Autodialer_API/report/report_search_ordered', 'developers/api/Autodialer_API/report/report_info',],
				},
				'developers/api/Autodialer_API/example',
				'developers/api/Autodialer_API/call_originate',

			],
		},
		{
			type: 'category',
			label: 'احراز هویت دو مرحله ای',
			items: ['developers/two_verify/whatis', 'developers/two_verify/template_sms', 'developers/two_verify/service_activate'],
		},



		/////////////////////////////////// API AutoDialer Sidebar//////////////////////////////////

	],

	/////////////////////////////////// API  AutoDialer Sidebar//////////////////////////////////







	///////////////////////////////////Simotel Docs Sidebar//////////////////////////////////
	Docs: [
		'simotel/introsimotel',


		{
			type: 'category',
			label: 'آشنایی با سامانه',
			collapsed: false,
			items: ['simotel/system-intro/pbxsettingintro', 'simotel/system-intro/dialplanintro'],
		},


		{
			'مستندات مرکز‌تماس': [
				{
					'داشبورد مدیریتی': ['simotel/callcenter-docs/dashboard/intro', 'simotel/callcenter-docs/dashboard/realtime_components', 'simotel/callcenter-docs/dashboard/queue_components', 'simotel/callcenter-docs/dashboard/general_components',],



					'مرکز مانیتورینگ': ['simotel/callcenter-docs/monitor/operator', 'simotel/callcenter-docs/monitor/exten'],



					'مرکزتماس': ['simotel/callcenter-docs/pbx/users', 'simotel/callcenter-docs/pbx/trunks', 'simotel/callcenter-docs/pbx/queues', 'simotel/callcenter-docs/pbx/groups', 'simotel/callcenter-docs/pbx/music_on_hold', 'simotel/callcenter-docs/pbx/announcements', 'simotel/callcenter-docs/pbx/featur_codes', 'simotel/callcenter-docs/pbx/speed_dial', 'simotel/callcenter-docs/pbx/blacklist', 'simotel/callcenter-docs/pbx/white_list', 'simotel/callcenter-docs/pbx/faxes'],



					'صندوق‌صوتی': ['simotel/callcenter-docs/voicemail/voice_mailboxes', 'simotel/callcenter-docs/voicemail/inbox',],



					'تماس‌بهمنی': ['simotel/callcenter-docs/spit-detection/intro', 'simotel/callcenter-docs/spit-detection/spit_detect', 'simotel/callcenter-docs/spit-detection/auto_spit_detect',],



					'ویرایشگر': ['simotel/callcenter-docs/dialplan/intro',
						{ 'کامپوننت‌ها': ['simotel/callcenter-docs/dialplan/components/outgoing_route', 'simotel/callcenter-docs/dialplan/components/incoming_route', 'simotel/callcenter-docs/dialplan/components/autodialer_route', 'simotel/callcenter-docs/dialplan/components/ivr', 'simotel/callcenter-docs/dialplan/components/ivr_api', 'simotel/callcenter-docs/dialplan/components/extension', 'simotel/callcenter-docs/dialplan/components/extension_api', 'simotel/callcenter-docs/dialplan/components/queue', 'simotel/callcenter-docs/dialplan/components/answer', 'simotel/callcenter-docs/dialplan/components/agi', 'simotel/callcenter-docs/dialplan/components/disa', 'simotel/callcenter-docs/dialplan/components/trunk', 'simotel/callcenter-docs/dialplan/components/trunk_api', 'simotel/callcenter-docs/dialplan/components/announcements', 'simotel/callcenter-docs/dialplan/components/callback', 'simotel/callcenter-docs/dialplan/components/ring_group', 'simotel/callcenter-docs/dialplan/components/followe_me', 'simotel/callcenter-docs/dialplan/components/voicemail', 'simotel/callcenter-docs/dialplan/components/conference', 'simotel/callcenter-docs/dialplan/components/call_completion', 'simotel/callcenter-docs/dialplan/components/pickup', 'simotel/callcenter-docs/dialplan/components/poll', 'simotel/callcenter-docs/dialplan/components/mix_monitor', 'simotel/callcenter-docs/dialplan/components/authentication', 'simotel/callcenter-docs/dialplan/components/time_condition', 'simotel/callcenter-docs/dialplan/components/spit_detection', 'simotel/callcenter-docs/dialplan/components/blacklist', 'simotel/callcenter-docs/dialplan/components/whitelist', 'simotel/callcenter-docs/dialplan/components/jump_in', 'simotel/callcenter-docs/dialplan/components/jump_out', 'simotel/callcenter-docs/dialplan/components/corrector', 'simotel/callcenter-docs/dialplan/components/custom_plan', 'simotel/callcenter-docs/dialplan/components/smart_api', 'simotel/callcenter-docs/dialplan/components/chanspy', 'simotel/callcenter-docs/dialplan/components/page',], },
						'simotel/callcenter-docs/dialplan/variables',
					],



					'گزارشات': ['simotel/callcenter-docs/reports/intro', 'simotel/callcenter-docs/reports/filter', 'simotel/callcenter-docs/reports/quick_report', 'simotel/callcenter-docs/reports/advanced_report', 'simotel/callcenter-docs/reports/custom_report',],



					'‌نگهداری': ['simotel/callcenter-docs/maintenance/accounts', 'simotel/callcenter-docs/maintenance/groups', 'simotel/callcenter-docs/maintenance/account_type', 'simotel/callcenter-docs/maintenance/activity_log', 'simotel/callcenter-docs/maintenance/server_status',
						{
							'Settings': ['simotel/callcenter-docs/maintenance/settings/general_settings', 'simotel/callcenter-docs/maintenance/settings/api_settings', 'simotel/callcenter-docs/maintenance/settings/update', 'simotel/callcenter-docs/maintenance/settings/push_notification',
								'simotel/callcenter-docs/maintenance/settings/backup_drive', 'simotel/callcenter-docs/maintenance/settings/mail_server', 'simotel/callcenter-docs/maintenance/settings/more_settings',],
						},
						'simotel/callcenter-docs/maintenance/network', 'simotel/callcenter-docs/maintenance/api_accounts', 'simotel/callcenter-docs/maintenance/api_logs', 'simotel/callcenter-docs/maintenance/system_logs',],




					'پنل‌مدیریتی': ['simotel/callcenter-docs/control-panel/backup', 'simotel/callcenter-docs/control-panel/ha', 'simotel/callcenter-docs/control-panel/ha_logs', 'simotel/callcenter-docs/control-panel/pbx_cli',],
				}
			]
		},

		{
			'مباحث پیشرفته': [

				{

					//'سرویس HA': ['simotel/advance-settings/ha-service/intro'],				
				},
				'simotel/advance-settings/simotelupdate', 'simotel/advance-settings/simotelhelper_tool', 'simotel/advance-settings/simotel.ini', 'simotel/advance-settings/create_ami_user', 'simotel/advance-settings/matchpattern', 'simotel/advance-settings/call_record_storage',
			]
		},
	],
	///////////////////////////////////Simotel Docs Sidebar//////////////////////////////////

};













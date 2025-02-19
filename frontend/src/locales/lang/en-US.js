import antdEnUS from 'ant-design-vue/es/locale-provider/en_US'
import momentEU from 'moment/locale/eu'

const components = {
  antLocale: antdEnUS,
  momentName: 'eu',
  momentLocale: momentEU
}

const locale = {
  'message': '-',
  'menu.home': 'Home',
  'menu.dashboard': 'Dashboard',
  'menu.dashboard.analysis': 'Analysis',
  'menu.dashboard.monitor': 'Monitor',
  'menu.dashboard.workplace': 'Workplace',

  'menu.document': 'Document',
  'menu.document.introduce': 'Introduce',
  'menu.document.payload': 'Payload',
  'menu.document.api': 'Api',
  'menu.document.rebinding': 'Rebinding',
  'menu.document.history': 'History',
  'menu.document.resolve': 'Resolve',
  'menu.document.install': 'Install',

  'menu.record': 'Record',
  'menu.record.dns': 'DNS',
  'menu.record.http': 'HTTP',

  'menu.allrecord': 'All Record',
  'menu.allrecord.dns': 'DNS',
  'menu.allrecord.http': 'HTTP',
  'menu.allrecord.count': "Count",

  'menu.setting': 'Management',
  'menu.setting.system.security': 'Security',
  'menu.setting.system.base': 'Basic',
  'menu.setting.system': 'System',
  'menu.setting.user': 'User',

  'layouts.usermenu.dialog.title': 'Message',
  'layouts.usermenu.dialog.content': 'Do you really log-out.',

  'app.setting.pagestyle': 'Page style setting',
  'app.setting.pagestyle.light': 'Light style',
  'app.setting.pagestyle.dark': 'Dark style',
  'app.setting.pagestyle.realdark': 'RealDark style',
  'app.setting.themecolor': 'Theme Color',
  'app.setting.navigationmode': 'Navigation Mode',
  'app.setting.content-width': 'Content Width',
  'app.setting.fixedheader': 'Fixed Header',
  'app.setting.fixedsidebar': 'Fixed Sidebar',
  'app.setting.sidemenu': 'Side Menu Layout',
  'app.setting.topmenu': 'Top Menu Layout',
  'app.setting.content-width.fixed': 'Fixed',
  'app.setting.content-width.fluid': 'Fluid',
  'app.setting.othersettings': 'Other Settings',
  'app.setting.weakmode': 'Weak Mode',
  'app.setting.copy': 'Copy Setting',
  'app.setting.loading': 'Loading theme',
  'app.setting.copyinfo': 'copy success，please replace defaultSettings in src/models/setting.js',
  'app.setting.production.hint': 'Setting panel shows in development environment only, please manually modify',

  'menu.setting.resolve': 'Resolve',
  'menu.document.xip': 'xip',
  'Host': 'Host',
  'Type': 'Type',
  'Value': 'Value'
}

export default {
  ...components,
  ...locale
}

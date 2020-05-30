module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pwa: {
    name: 'Crew demo',
    shortName: 'Crew demo',
    display: 'standalone',
    themeColor: '#1a1a1a',
    msTileColor: '#1a1a1a',
    background_color: '#1a1a1a',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    startUrl: '/?standalone=true',
    manifestOptions: {
      'background_color': '#1a1a1a'
    }
  }
}

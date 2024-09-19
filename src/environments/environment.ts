// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  paymentUrl: 'https://buy.stripe.com/5kA4gWgOA9nt1K828d',
  // beauteshPaymentUrl: 'https://buy.stripe.com/cN200G7e0dDJ88wbIO',// 45000 pesos
  beauteshPaymentUrl: 'https://buy.stripe.com/5kA28O1TG1V160o008',//$5000 pesos
  pamperedPawsPaymentUrl: 'https://buy.stripe.com/7sI9BgdCo6bh4WkeV3',//$1 dollar
  goToPamperedpawsbycharlie: 'https://pamperedpawsbycharlie.com/',//$1 dollar
  bookRealStatePaymentUrl: 'https://buy.stripe.com/cN27t89m89nt88wdQR',//$5000 pesos
  provider: 'ai',
  booksActionsUrl: 'assets/db/books.json',
  imagesActionsUrl: 'assets/db/images.json',
  websiteUrl:'https://raw-sample.web.app/'
};
// src/environments/supabase.config.ts
export const supabaseConfig = {
  supabaseUrl: 'https://kqtfdwchgwngwypchvew.supabase.co', // Tu URL de Supabase
  supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxdGZkd2NoZ3duZ3d5cGNodmV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5MDcyMzcsImV4cCI6MjA0MTQ4MzIzN30.nZv7SY_FfXmGrrfykkmXYI0PxRTqvqNkH6rw2rgaFCo' // Tu API Key
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

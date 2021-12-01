# Smartup Network Challenge

[APK indirmek icin.](https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40ceyhungulbas/SmartupNetworkChallenge-e84f24f886064c13990254724bdd2dcb-signed.apk)

Oncelikle sureci anlatmaya baslamadan once bu firsat icin cok tesekkur ederim.

- 2 saat icinde bitirdigim bi uygulama oldu.
- Ilk isim react-native nasil kurulur diye arastirmak oldu. Default kurmaktan ziyade expo kullanmak daha mantikli geldi. Cunku android ve ios calistirmasi icin ekstra bir sey kurmama gerek kalmadi. Sadece expo'yu kullanabilmek icin Windows'da path ayarlari yapmam yetti.

Ilk bir saatlik surecim su sekilde isledi:
1) Hook'lari importladim.
2) Quote icin state tanimladim.
3) `App.js`'in return edildigi alana Quote'lari getirmesi icin buton ekledim ve her basildiginda quote'lari cagiracagim fonksiyonu ekledim ek olarak butona bi de title verdim.
4) Quote'leri fetchlemek icin kullanacagimiz `fetchQuote()` fonksiyonunu async / await kullanarak yazdim.
5) Ardindan `useEffect` kullanarak `fetchQuote()` fonksiyonunu cagirdim.
6) `App.js`'in return edildigi alana fetchledigimiz ve state'e atadigimiz quote'lari sirasiyle metni, yazari ve etiketlerini cagirdim. Bunlari cagirirken `?.` kullandim sebebi de eger state'in ici bos olmasi durumunda uygulamamiz cokmeyecek.
7) Her sey calisiyordu, simdi refresh edildigi anda yeni quote'lari cagiracak kod blogunu eklemem gerekiyordu. 
8) Bu sorunu cozmek arastirma yaptigimda `RefreshControl` diye bi [component](https://reactnative.dev/docs/refreshcontrol) buldum.
9) Ozetle pencerenin yenilenip yenilenmedigini anlamasi adina `refreshing` diye state tanimladik.
10) `wait()` adli bi fonksiyon tanimladik. Bu fonksiyonda yeni bi Promise olusturuyoruz ve icine zaman asimi saglamasi adina `setTimeout` kullandik.
11) Sonra useCallback hook'unu kullaniyoruz. Bunun sebebi ise refreshing state'i bizim icin surekli degismeli ve degistiginde de kontrol etmemiz gerekiyor. useCallback bize bu kontrolu etmemize sagliyor ve bagimliliklardan biri degistiginde bunu geri almanin yolunu aciyor. 
12) `onRefresh` adindaki useCallback fonksiyonu tanimladik. Bu fonksiyonda basta default olarak ayarladagimiz refresh state'ini false'dan true'ya cekiyor boylelikle sayfa yenileniyor ardindan onceden tanimladigimiz `wait()` fonksiyonunu 20ms degerini attik ve 20ms bekledikten sonra tekrardan refresh state'ini false'a cektik. Tekrardan `fetchQuote()` fonksiyonunu cagiriyoruz boylelikle sayfa her yenilendiginde tekrardan yeni quote'lar karsimiza cikacak.
13) Son `ScrollView`'un icine `refreshControll` attribute'unun icine `RefreshControl` component'ini cagirdim. `refreshing` attribute'nun icine `refreshing` state'ini, `onRefresh` attribute fonksiyonun icine de kendi yazdigimiz `onRefresh` fonksiyonunu ekledik.

Diger bir saatlik surecim ise su sekilde isledi:
1) CSS kullanilmiyormus react-native'de ve onun esleniklerini arastirdim fakat uygulama konusunda sorunlar yasadim.

React-native ogrenmek istiyordum, sizin sayenizde basic bi uygulamayla tanismam ve bu uygulamanin benim icin coding challenge olmasi ayriyeten cok heyecan verici ve eglenceli bi deneyim oldu. Tesekkur ederim her sey icin. Umarim ilerleyen asamalarda gorusebiliriz.

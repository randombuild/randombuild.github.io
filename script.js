function showImages() {
    // overlay görünür hale getir
 
  
    // image-container görünür hale getir
    document.getElementById("image-container").style.display = "block";

    // 6 kategorideki resimler
    const images = [
      "k1/1.png",
      "k1/2.png",
      "k1/3.png",
      "k1/4.png",
      "k1/5.png",
      "k1/6.png",
      "k1/7.png",
      "k1/8.png",
      "k1/9.png",
      "k1/10.png",
      "k1/11.png",
      "k1/12.png",
      "k1/13.png",
      "k1/14.png",
      "k1/15.png",
      "k1/16.png",
      "k1/17.png",
      "k1/18.png",
      "k1/19.png",
      "k1/20.png",
      "k1/21.png",
      "k1/22.png",
      "k1/23.png",
      "k1/24.png",
      "k1/25.png",

      "k2/1.png",
      "k2/2.png",
      "k2/3.png",
      "k2/4.png",
      "k2/5.png",
      "k2/6.png",
      "k2/7.png",

      "k3/1.png",
      "k3/2.png",
      "k3/3.png",
      "k3/4.png", 
      "k3/5.png",
      "k3/6.png",
      "k3/7.png",
      "k3/8.png",
      "k3/9.png",
      "k3/10.png",
      "k3/11.png",
      "k3/12.png",
      "k3/13.png",
      "k3/14.png",
      "k3/15.png",
      "k3/65.png",

      "k4/16.png",
      "k4/17.png",
      "k4/18.png",
      "k4/19.png",
      "k4/20.png",
      "k4/21.png",
      "k4/22.png",
      "k4/23.png",
      "k4/24.png",
      "k4/25.png",
      "k4/26.png",
      "k4/27.png",
      "k4/28.png",
      "k4/29.png",
      "k4/30.png",
      "k4/31.png",

      "k5/33.png",
      "k5/34.png",
      "k5/35.png",
      "k5/36.png",
      "k5/37.png",
      "k5/38.png",
      "k5/39.png",
      "k5/40.png",
      "k5/41.png",
      "k5/42.png",
      "k5/43.png",
      "k5/44.png",
      "k5/45.png",
      "k5/46.png",
      "k5/47.png",
      "k5/48.png",
      "k5/40.png",
      "k5/41.png",
      "k5/42.png",
      "k5/43.png",
      "k5/44.png",
      "k5/45.png",
      "k5/46.png",
      "k5/47.png",
      "k5/48.png",

      "k6/49.png",
      "k6/50.png",
      "k6/51.png",
      "k6/52.png",
      "k6/53.png",
      "k6/54.png",
      "k6/55.png",
      "k6/56.png",
      "k6/57.png",
      "k6/58.png",
      "k6/59.png",
      "k6/60.png",
      "k6/61.png",
      "k6/62.png",
      "k6/63.png",
      "k6/64.png",

    ];
  
    const selectedImages = [];
  
    // 7 kategoriden her birinden rastgele bir resim seç
    for (let i = 0; i < 7; i++) {
      const categoryImages = images.filter((image) => image.includes(`k${i+1}`));
      const selectedImage = categoryImages[Math.floor(Math.random() * categoryImages.length)];
      selectedImages.push(selectedImage);
    }


    // rastgele 6 resmi ekle
    for (let i = 0; i < 6; i++) {
      const imgElement = document.createElement("img");
      imgElement.src = selectedImages[i % 7];
      document.getElementById("image-container").appendChild(imgElement);
    }
  }
  

//aaaaaaaaaaaaaaaaaaaaaaaaaaa



function showRandomCharacter() {
  // overlay görünür hale getir


  // character-container görünür hale getir
  document.getElementById("character-container").style.display = "block";

  // 162 karakterin resimleri
  const characters = [
    "karakter/Aphelios_0.jpg",
    "karakter/Lillia_0.jpg",
    "karakter/RiotX_ChampionList_aatrox.jpg",
    "karakter/RiotX_ChampionList_ahri.jpg",
    "karakter/RiotX_ChampionList_akali.jpg",
    "karakter/RiotX_ChampionList_akshan_v2.jpg",
    "karakter/RiotX_ChampionList_alistar.jpg", 
    "karakter/RiotX_ChampionList_amumu.jpg", 
    "karakter/RiotX_ChampionList_anivia.jpg", 
    "karakter/RiotX_ChampionList_annie.jpg",
    "karakter/RiotX_ChampionList_ashe.jpg",
    "karakter/RiotX_ChampionList_aurelionsol.jpg",
    "karakter/RiotX_ChampionList_azir.jpg",
    "karakter/RiotX_ChampionList_bard.jpg",
    "karakter/RiotX_ChampionList_belveth.jpg",
    "karakter/RiotX_ChampionList_blitzcrank.jpg",
    "karakter/RiotX_ChampionList_brand.jpg",
    "karakter/RiotX_ChampionList_braum.jpg",
    "karakter/RiotX_ChampionList_caitlyn_v2.jpg",
    "karakter/RiotX_ChampionList_camille.jpg",
    "karakter/RiotX_ChampionList_cassiopeia.jpg",
    "karakter/RiotX_ChampionList_chogath.jpg",
    "karakter/RiotX_ChampionList_corki.jpg",
    "karakter/RiotX_ChampionList_darius.jpg",
    "karakter/RiotX_ChampionList_diana.jpg",
    "karakter/RiotX_ChampionList_draven.jpg",
    "karakter/RiotX_ChampionList_drmundo_v2.jpg",
    "karakter/RiotX_ChampionList_ekko.jpg",
    "karakter/RiotX_ChampionList_elise.jpg",
    "karakter/RiotX_ChampionList_evelynn.jpg",
    "karakter/RiotX_ChampionList_ezreal.jpg",
    "karakter/RiotX_ChampionList_fiddlesticks_v2.jpg",
    "karakter/RiotX_ChampionList_fiora.jpg",
    "karakter/RiotX_ChampionList_fizz.jpg" ,
    "karakter/RiotX_ChampionList_galio.jpg",
    "karakter/RiotX_ChampionList_gangplank.jpg",
    "karakter/RiotX_ChampionList_garen.jpg",
    "karakter/RiotX_ChampionList_gnar.jpg",
    "karakter/RiotX_ChampionList_gragas.jpg",
    "karakter/RiotX_ChampionList_graves.jpg",
    "karakter/RiotX_ChampionList_gwen.jpg",
    "karakter/RiotX_ChampionList_hecarim.jpg",
    "karakter/RiotX_ChampionList_heimerdinger.jpg",
    "karakter/RiotX_ChampionList_ialiyah.jpg",
    "karakter/RiotX_ChampionList_illaoi.jpg",
    "karakter/RiotX_ChampionList_irelia.jpg",
    "karakter/RiotX_ChampionList_ivern.jpg",
    "karakter/RiotX_ChampionList_janna.jpg",
    "karakter/RiotX_ChampionList_jarvaniv.jpg",
    "karakter/RiotX_ChampionList_jax.jpg",
    "karakter/RiotX_ChampionList_jayce.jpg",
    "karakter/RiotX_ChampionList_jhin.jpg",
    "karakter/RiotX_ChampionList_jinx.jpg",
    "karakter/RiotX_ChampionList_kaisa.jpg",
    "karakter/RiotX_ChampionList_kalista.jpg",
    "karakter/RiotX_ChampionList_karma.jpg",
    "karakter/RiotX_ChampionList_karthus.jpg",
    "karakter/RiotX_ChampionList_kassadin.jpg",
    "karakter/RiotX_ChampionList_katarina.jpg",
    "karakter/RiotX_ChampionList_kayle_v4.jpg",
    "karakter/RiotX_ChampionList_kayn.jpg",
    "karakter/RiotX_ChampionList_kennen.jpg",
    "karakter/RiotX_ChampionList_khazix.jpg",
    "karakter/RiotX_ChampionList_kindred.jpg",
    "karakter/RiotX_ChampionList_kled.jpg",
    "karakter/RiotX_ChampionList_kogmaw.jpg",
    "karakter/RiotX_ChampionList_ksante.jpg",
    "karakter/RiotX_ChampionList_leblanc.jpg",
    "karakter/RiotX_ChampionList_leesin.jpg",
    "karakter/RiotX_ChampionList_leona.jpg",
    "karakter/RiotX_ChampionList_lissandra.jpg",
    "karakter/RiotX_ChampionList_lucian.jpg",
    "karakter/RiotX_ChampionList_lulu.jpg",
    "karakter/RiotX_ChampionList_lux.jpg",
    "karakter/RiotX_ChampionList_malaphite.jpg",
    "karakter/RiotX_ChampionList_malzahar.jpg",
    "karakter/RiotX_ChampionList_maokai.jpg",
    "karakter/RiotX_ChampionList_masteryi.jpg",
    "karakter/RiotX_ChampionList_missfortune.jpg",
    "karakter/RiotX_ChampionList_monkeyking.jpg" ,
    "karakter/RiotX_ChampionList_mordekaiser_v2.jpg",
    "karakter/RiotX_ChampionList_morgana.jpg" ,
    "karakter/RiotX_ChampionList_nami.jpg",
    "karakter/RiotX_ChampionList_nasus.jpg",
    "karakter/RiotX_ChampionList_nautilus.jpg",
    "karakter/RiotX_ChampionList_neeko.jpg",
    "karakter/RiotX_ChampionList_nidalee.jpg",
    "karakter/RiotX_ChampionList_nilah.jpg",
    "karakter/RiotX_ChampionList_nocturne.jpg",
    "karakter/RiotX_ChampionList_nunu.jpg",
    "karakter/RiotX_ChampionList_olaf.jpg",
    "karakter/RiotX_ChampionList_orianna.jpg",
    "karakter/RiotX_ChampionList_ornn.jpg",
    "karakter/RiotX_ChampionList_pantheon.jpg",
    "karakter/RiotX_ChampionList_poppy.jpg",
    "karakter/RiotX_ChampionList_pyke.jpg",
    "karakter/RiotX_ChampionList_qiyana.jpg",
    "karakter/RiotX_ChampionList_quinn.jpg",
    "karakter/RiotX_ChampionList_rakan.jpg",
    "karakter/RiotX_ChampionList_rammus.jpg",
    "karakter/RiotX_ChampionList_reksai.jpg",
    "karakter/RiotX_ChampionList_Rell_v2.jpg",
    "karakter/RiotX_ChampionList_renata_glasc_v5.jpg",
    "karakter/RiotX_ChampionList_renekton.jpg",
    "karakter/RiotX_ChampionList_rengar.jpg",
    "karakter/RiotX_ChampionList_riven.jpg",
    "karakter/RiotX_ChampionList_rumble.jpg",
    "karakter/RiotX_ChampionList_ryze.jpg",
    "karakter/RiotX_ChampionList_sejuani.jpg",
    "karakter/RiotX_ChampionList_senna.jpg",
    "karakter/RiotX_ChampionList_shaco.jpg",
    "karakter/RiotX_ChampionList_shen.jpg",
    "karakter/RiotX_ChampionList_shyvana.jpg",
    "karakter/RiotX_ChampionList_singed.jpg",
    "karakter/RiotX_ChampionList_sion.jpg",
    "karakter/RiotX_ChampionList_sivir.jpg",
    "karakter/RiotX_ChampionList_skarner.jpg",
    "karakter/RiotX_ChampionList_sona.jpg",
    "karakter/RiotX_ChampionList_soraka.jpg",
    "karakter/RiotX_ChampionList_swain.jpg",
    "karakter/RiotX_ChampionList_sylas.jpg",
    "karakter/RiotX_ChampionList_syndra.jpg",
    "karakter/RiotX_ChampionList_tahmkench.jpg",
    "karakter/RiotX_ChampionList_talon.jpg",
    "karakter/RiotX_ChampionList_taric.jpg",
    "karakter/RiotX_ChampionList_teemo.jpg",
    "karakter/RiotX_ChampionList_thresh.jpg",
    "karakter/RiotX_ChampionList_tristana.jpg",
    "karakter/RiotX_ChampionList_trundle.jpg",
    "karakter/RiotX_ChampionList_tryndamere.jpg",
    "karakter/RiotX_ChampionList_twistedfate.jpg",
    "karakter/RiotX_ChampionList_twitch.jpg",
    "karakter/RiotX_ChampionList_udyr_v2.jpg",
    "karakter/RiotX_ChampionList_urgot.jpg",
    "karakter/RiotX_ChampionList_varus.jpg",
    "karakter/RiotX_ChampionList_vayne.jpg",
    "karakter/RiotX_ChampionList_veigar.jpg",
    "karakter/RiotX_ChampionList_velkoz.jpg",
    "karakter/RiotX_ChampionList_vex.jpg",
    "karakter/RiotX_ChampionList_vi.jpg",
    "karakter/RiotX_ChampionList_viego.jpg" ,
    "karakter/RiotX_ChampionList_viktor.jpg",
    "karakter/RiotX_ChampionList_vladimir.jpg",
    "karakter/RiotX_ChampionList_warwick.jpg",
    "karakter/RiotX_ChampionList_xayah.jpg",
    "karakter/RiotX_ChampionList_xeratth.jpg",
    "karakter/RiotX_ChampionList_xinzhao.jpg",
    "karakter/RiotX_ChampionList_yasuo.jpg",
    "karakter/RiotX_ChampionList_yorick.jpg",
    "karakter/RiotX_ChampionList_yuumi.jpg",
    "karakter/RiotX_ChampionList_zac.jpg",
    "karakter/RiotX_ChampionList_zed.jpg",
    "karakter/RiotX_ChampionList_zeri.jpg",
    "karakter/RiotX_ChampionList_ziggs.jpg",
    "karakter/RiotX_ChampionList_zilean.jpg" ,
    "karakter/RiotX_ChampionList_zoe.jpg",
    "karakter/RiotX_ChampionList_zyra.jpg",
    "karakter/Samira_0.jpg",
    "karakter/Seraphine_0.jpg",
    "karakter/Sett_0.jpg",
    "karakter/Volibear_0.jpg",
    "karakter/Yone_0.jpg",
  ];

  // rastgele bir karakter seç
  const selectedCharacter = characters[Math.floor(Math.random() * characters.length)];

  
  // seçilen karakterin resmini ekle
  const imgElement = document.createElement("img");
  imgElement.src = selectedCharacter;
  document.getElementById("character-container").appendChild(imgElement);
}



function temizle() {
  var container1 = document.getElementById("character-container");
  var container2 = document.getElementById("image-container");
  
  if (container1 && container2) {
    container1.innerHTML = "";
    container2.innerHTML = "";
  }
}


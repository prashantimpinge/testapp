<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-img class="text-center mx-auto" style="width: 110px;" src="./assets/logonew.jpg"></ion-img>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <slot />
    </ion-content>
  </ion-page>
</template>

<script>
import { IonHeader, IonToolbar, IonImg, IonContent, IonPage } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseLayout',
  components: {
    IonHeader,
    IonToolbar,
    IonImg,
    IonContent,
    IonPage
  }
});
</script>

<template>
  <base-layout>
    <div class="container mx-auto px-4 text-center py-10">
      <ion-button router-link="/getstarted" color="primary">Get Started</ion-button>
      <ion-button router-link="/learn-more" color="secondary ion-margin">Learn More</ion-button>
    </div>
  </base-layout>
</template>

<script>
import { defineComponent } from 'vue';
import { IonButton } from '@ionic/vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    IonButton
  }
});
</script>

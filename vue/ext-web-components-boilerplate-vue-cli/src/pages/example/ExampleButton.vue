<template>
  <ext-container padding="10px" layout="hbox" width="600px">
    <ext-button text="Normal" ui="" shadow="true" iconCls="" arrowAlign="bottom" @ready="buttonReady">
    </ext-button>
    <ext-button text='Badge' ui="" shadow="true" iconCls="" badgeText="2" @ready="buttonReady">
    </ext-button>
    <ext-button text='Disabled' shadow="true" ui="" iconCls="" disabled="true" @ready="buttonReady">
    </ext-button>
  </ext-container>
</template>
<script>
export default {
  name: "Example-Button",
  data() {
    return {};
  },
  methods: {
    buttonReady(event) {
      console.info(event);
    },
  },
};
</script>
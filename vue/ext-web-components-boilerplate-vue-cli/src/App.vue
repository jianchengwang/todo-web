<template>
  <ext-panel title="Ext-Web-Components Example" bodyPadding="20px">
    <ext-toolbar border="1">
      <ext-button text="Button" border="1" @tap="showComponent('Button')"></ext-button>
      <ext-button text="Media" border="1" @tap="showComponent('Media')"></ext-button>
      <ext-button text="Grid" border="1" @tap="showComponent('Button')"></ext-button>
      <ext-button text="Tree" border="1" @tap="showComponent('Button')"></ext-button>
      <ext-button text="Button" border="1" @tap="showComponent('Button')"></ext-button>
    </ext-toolbar>
    <router-view></router-view>
  </ext-panel>
</template>
<script>
export default {
  name: "app",
  data() {
    return {};
  },
  methods: {
    showComponent(componentName) {
      this.$router.push("/example/" + componentName);
    },
  },
};
</script>
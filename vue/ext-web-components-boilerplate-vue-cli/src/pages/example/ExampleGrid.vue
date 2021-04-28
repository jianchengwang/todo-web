<template>
  <ext-grid title="Ext Web Components in Vue" height="260px" columns='[
        {"text": "Name", "width": "250", "dataIndex": "name", "cell": {"style": {"text-align": "left"}}},
        {"text": "Email Address", "flex": "1", "dataIndex": "email", "cell": {"style": {"text-align": "left"}}},
        {"text": "Phone Number", "width": "250", "dataIndex": "phone", "cell": {"style": {"text-align": "left"}}}
      ]' data='[
        {"name": "Lisa", "email": "lisa@simpsons.com", "phone": "555-111-1224"},
        {"name": "Bart", "email": "bart@simpsons.com", "phone": "555-222-1234"},
        {"name": "Homer", "email": "homer@simpsons.com", "phone": "555-222-1244"},
        {"name": "Marge", "email": "marge@simpsons.com", "phone": "555-222-1254"}
      ]'>
  </ext-grid>
</template>

<script>
export default {
  name: "ExampleGrid",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
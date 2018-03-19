<template>
  <div class="text-input">
    <label :for="inputId">{{inputLabel}}</label>
    <input :id="inputId" :type="inputType" :name="inputName" />
  </div>
</template>
<script>
export default {
  props: {
    inputId: {
      type:String,
      required:true
    },
    inputType: {
      type:String,
      default:() => 'Text'
    },
    inputLabel: {
      type:String,
      required:true
    },
    inputName: {
      type: String
    }
  }
}
</script>


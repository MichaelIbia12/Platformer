<script setup>



</script>

<template>
 <div class="modal">
   
   <h1>Create new account<span>.</span></h1>
    <span>Already have an account? <a href="#">Login</a></span>
   <div class="input">
    <div class="row">
        <input type="text" placeholder="First-name" autocomplete="off">
        <input type="text" placeholder="Last-name">
    </div>
    <input type="text" placeholder="Email" autocomplete="off">
    <input type="password" placeholder="Password" autocomplete="off" class="margin">
    <div class="row">
        <div class="row rowFour">
            <button> <font-awesome-icon icon="fa-brands fa-facebook" /></button>
            <button><font-awesome-icon icon="fa-brands fa-twitter" /></button>
            <button><font-awesome-icon icon="fa-brands fa-google" /></button>
            <button><font-awesome-icon icon="fa-brands fa-instagram" /></button>
        </div>
        <button class="acc">Create account</button>
        
    </div>
   </div>
 </div>

</template>
<script>
export default {
    data(){
        return{
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        }
    }
}
</script>


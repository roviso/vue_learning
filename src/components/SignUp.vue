<template>
    <div class="signup">
        <input type="text" placeholder="Username" v-model="signup.username"/> <br><br>
        <input type="text" placeholder="Email" v-model="signup.email"/> <br><br>
        <input type="text" placeholder="Password" v-model="signup.password"/> <br><br>
        <p> Select your Interest</p>
        <input type="checkbox" id="frontend" value="frontend" v-model="signup.interest"/>
        <label for="frontend">FrontEnd</label>
        <input type="checkbox" id="python" value="python" v-model="signup.interest"/>
        <label for="python">Python</label>

        <br><br>
        <p> Select your Gender</p>
        <input type="radio" id="male" value="male" v-model="signup.gender"/>
        <label for="male">Male</label>
        <input type="radio" id="female" value="female" v-model="signup.gender"/>
        <label for="female">Female</label>
        <input type="radio" id="bi" value="bi" v-model="signup.gender"/>
        <label for="bi">Bi-Sexual</label>

        <button v-on:click="signupUser"> Sign Up</button>
    </div>
</template>


<script>
export default{
    name: "SignUp",
    data()
    {
        return {
            signup:{
                username:null,
                email:null,
                password:null,
                interest:[],
                gender:null,


            }
        }
    },
    methods:{
        signupUser(){
            console.log(this.signup, this.signup.username, this.signup.password)
        }

    }
}
</script>


<style scoped>
.signup {
    background-color: rgb(206, 219, 200);
    /* width: 300px; */
    height: max-content;
    margin: 33px;
    padding-left: 68px;
    padding: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    /* -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75); */
    /* -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75); */
}
</style>
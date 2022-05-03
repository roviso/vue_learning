<template>
    <div>
        <p v-if="error.length">
            <b >Error on logging</b>
            <ul>
                <li v-for="e in error" v-bind:key="e.id">
                    {{e}}
                </li>
            </ul>
        </p>
        <form @submit="login">
            <input type="text" placeholder="Enter username" v-model="username"/><br><br>
            <input type="password" placeholder="Entrer Password" v-model="password" /><br><br>
            <button type="submit">LogIn</button>
        </form>
    </div>
</template>


<script>
export default{
    name: "LogIn",
    data()
    {
        return {
            error: [],
            username: null,
            password:null
        }
    },methods:{
        login(e)
        {   
            this.error = [];
            console.log('Trying to login');
            if(this.username && this.password)
            {
                console.log("ALL OK");
                // return true;
            }
            if(!this.username)
            {
                this.error.push("PLEASE ENTER USERNAME");
            }
            if(!this.password)
            {
                this.error.push("PLEASE ENTER PASSWORD");
            }
            e.preventDefault();
        }
    }
}
</script>
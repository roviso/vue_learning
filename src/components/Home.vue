<template>
    <div>
        <h1>Hello WORLD</h1>
        <button v-on:click="display">
            Toggle view
        </button>
        <h2 v-if="show">{{data}}</h2>
        <h2 v-else>
            The message is: {{msg}}
        </h2>

        <button v-on:click="hello('calling hello')">
            hello trigger
        </button>
        <div class="table-container">
            <Array data="This is inside Hello world"/>

            <Products v-on:updateAge="updateMyage($event)"/>

            <DataBind title="!!!DataBinding!!!!" v-bind:age="age"/>

            <SignUp />

            <LogIn />
        </div>
        
    </div>

</template>

<script>
import Array from './Array'
import Products from './Products'
import DataBind from './DataBind'
import SignUp from './SignUp'
import LogIn from './Login'

export default {
    name: 'HomeApp',
    components:{
        Array,
        Products,
        DataBind,
        SignUp,
        LogIn
    },
    props: {
        data:String,
        msg:String
    }, methods: {
        hello(data)
        {
            console.log(data),
            alert(data)
        },
        display()
        {
            console.log("inside displayyyy")
            this.show=!this.show
        },
        updateMyage(age)
        {
            this.age=age
        }

    },
    data()
    {
        return {
            show:false,
            age:24
        }
    }
}
</script>  


<style scoped>
div {
    background-color: beige;
    /* height:450px; */
    padding-bottom: 6px;
    
}

.table-container{
    display: flex;
}
</style>
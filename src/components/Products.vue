<template>
    <div class="products">
        <h1 v-once v-bind:style="{color:'purple'}">
            Products of {{name}}
        </h1>
        <table border="2px">
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>type</td>
            </tr>
            <tr v-for="product in product_list" :key="product.id">
                <td>{{product.id}}</td>
                <td>{{product.name}}</td>
                <td>{{product.type}}</td>
            </tr>

        </table>

        <h3 >{{name}}: {{age}} years old</h3>
        <div class="button-group">
            <button v-on:click="incrementAge">
                Increase Age
            </button>

            <button v-bind:disabled="disableBtn" v-on:click="changeName">
                Change the name to original
            </button>
        </div>

        <h5 v-bind:style="{color:'purple'}">
            {{old?"Too old":"Still young"}} with style Binding
        </h5>


        <h5 v-bind:class="{display:show,displayColor:show}">class Binding with object</h5>
        <h5 v-bind:class="[show?aclass:bclass]">class Binding with Array</h5>
        
        <p v-html="footer"></p>

    </div>
</template>

<script>
export default {
    name: "ProductList",
    data()
    {
        return {
            product_list:[
                {id: 1, name:'Monitor', type:'electronic'},
                {id: 2, name:'mosturizer ', type:'skin care'},
                {id: 3, name:'moist 2.0 x8778', type:'electronic'}

            ],
            name:'Roviso',
            age: 24,
            old: false,
            footer: " <footer><p>Author: Roviso Dominator</p><p><a href='ravi@prixa.org'>ravi@prixa.org</a></p></footer> ",
            disableBtn: false,
            show: true,
            aclass: 'arrayClass',
            bclass: 'brrayClass'
        }
    },
    methods:{
        incrementAge()
        {
            // alert("changing age")
            this.age = this.age + 1
            this.old = true
            this.$emit('updateAge',this.age)
        },
        changeName()
        {
            // alert("changing Name")
            this.name="Ravi Prajapati"
            this.disableBtn = true
            this.show = false
        }
    }
}
</script>

<style scoped>
.products {
    background-color: rgb(206, 219, 200);
    width: 300px;
    /* height: 210px; */
    margin: 33px;
    padding-left: 68px;
    padding: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
}

.button-group{
    display: flex;
    gap: 10px;
}

.display{
    color: red
}

.arrayClass{
    color: #465b2c
}

.brrayClass{
    color: #91763d
}
</style>
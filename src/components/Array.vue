<template>
    <div class="array">
        <h1>
            {{data}}
        </h1>
        <table border="2px">
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>EmailAddress</td>
            </tr>
            <tr v-for="user in users_list" :key="user.id">
                <td>{{user.id}}</td>
                <td>{{user.name}}</td>
                <td>{{user.email}}</td>
            </tr>

        </table>
    </div>
</template>

<script>
export default {
    name: "ArrayTest",
    props:{
        data:String
    },    
    data()
    {
        return {
            users_list:[
                {id: 1, name:'roviso', email:'ravi@prixa.org'},
                {id: 2, name:'loviso', email:'loviso@prixa.org'},
                {id: 2, name:'queviso', email:'queviso@prixa.org'}

            ]
        }
    }
}
</script>

<style scoped>
.array {
    background-color: rgb(225, 231, 235);
    width: 300px;
    height: max-content;
    padding: 33px;
    /* padding-left: 68px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);

}
</style>
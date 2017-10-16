<template>
<div class="panel panel-success">
<div class="panel-heading">
<Saleemah ></Saleemah> <br>
<br>
</div>

<div class="panel-body table-responsive">
<table class="table table-hover">
<thead>
<tr>
<th class="text-center">ID </th>
<th class="text-center">Name </th>
<th class="text-center">Age</th>
<th class="text-center">City</th>
<th class="text-center">Delete</th>
</tr>
</thead>
<br/>
<tr v-for="personData in personlist">
<td class="text-center">{{personData.id}}</td>
<td class="text-center">{{personData.name}}</td>
<td class="text-center">{{personData.age}}</td>
<td class="text-center">{{personData.city}}</td>
<td class="text-center"><button type="button" class="delete btn btn-danger btn-sm" v-on:click="deletePerson(personData.id)">
<span class="glyphicon glyphicon-trash"></span></button></td><br>

</tr>

</table><br/>
<button class="btn btn-primary btn-lg pull-right">Total : {{personlist.length}}</button>
</div>
</div>
</template>


<script>
import axios from 'axios'

export default{
data() {
return {
personlist: [],
}

},

methods: {

listAllPersons:function(){
axios.get('http://localhost:8080/personApi/persons')
.then((response) => {
this.personlist=response.data;
console.log(response.data)
})
.catch(error => {
console.log('Something went wrong' + error);
});
},
deletePerson:function(id){
axios.delete('http://localhost:8080/personApi/persons/' + id)
.then((response) => {
this.listAllPersons();
}).catch(error => {
console.log('Something went wrong' + error);
});
}
},
mounted(){
this.listAllPersons();
}
}


</script>

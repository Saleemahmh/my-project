<template>
<div class="container"><br/>
			<div class="row">
				<div class="col-md-6 col-md-offset-3">
					<div class="well well-default">
						<div class="well-body">
							<h3 class="text-center" style="color: black;">ADD PERSON</h3>
              <div class="form-group">
								<div class="input-group">
									<span class="input-group-addon"><span
										class="glyphicon glyphicon-user" style="color: black;"></span>
									</span> <input type="text" v-model="personapi.name"
										placeholder="Name" class="form-control" required>
								</div>
							</div>
              <div class="form-group">
                <div class="input-group">
                  <span class="input-group-addon"><span
                    class="glyphicon glyphicon-pencil" style="color: black;"></span>
                  </span> <input type="text" v-model="personapi.age"
                    placeholder="Age" class="form-control" required>
                </div>
              </div>
              <div class="form-group">
                <div class="input-group">
                  <span class="input-group-addon"><span
                    class="glyphicon glyphicon-home" style="color: black;"></span>
                  </span> <input type="text" v-model="personapi.city"
                    placeholder="City" class="form-control" required>
                </div>
              </div>
              <button type="submit" class="btn btn-primary btn-info"
									style="text-align: center;" v-on:click="addPersonApi(personapi)">Submit</button>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>


</template>
<script>
import axios from 'axios'
import list from './home.vue'
export default{
data(){
return{
personapi:{
id:'',
name:'',
age:'',
city:''
}
}
},
methods:{
addPersonApi:function(personapi){
    axios.post('http://localhost:8080/personApi/persons',this.personapi)
    .then((response) => {
      list.methods.listAllPersons();
      this.personapi={
      id:'',
      name:'',
      age:'',
      city:''
      }
      this.$router.push('/')
       console.log('Id : ' + personapi.id + 'Name : ' + personapi.name + ' Age: '+ personapi.age + ' City : '+ personapi.city);
    }).catch(error => {console.log(error);});
  }

}
}

</script>
<style>
body {
	background:
		url('http://www.powerpointhintergrund.com/uploads/2017/07/light-pink-background-light-pink-backgrounds-light-pink-gradient--29.jpeg');
	background-color: none;
	font: oblique;
	size: 18;
	font-family: 'Didot-Italic';
	font-style: italic;
	color: #B22222;
	text-align: center;
}


.form-signin {
	max-width: 280px;
	padding: 15px;
	margin: 100px;
	margin-top: 10px;
}

.input-group-addon {
	background-color: rgb(50, 118, 177);
	border-color: rgb(40, 94, 142);
	color: rgb(255, 255, 255);
}

.form-control:focus {
	background-color: rgb(50, 118, 177);
	border-color: rgb(40, 94, 142);
	color: rgb(255, 255, 255);
}

.well-default {
	opacity: 0.8;
	/*margin-top:30px;*/
}
</style>

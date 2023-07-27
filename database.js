const mongoose=require("mongoose");
const {Schema,model}=mongoose;
mongoose.connect("mongodb+srv://adminx:nohan8338@cluster0.fvvdife.mongodb.net/refs").then(()=>{console.log("successfully connected")});

const ActorSchema= new mongoose.Schema({
    name: String

});
const Actor= model("Actor",ActorSchema);
const UserSchema = new mongoose.Schema({
    name:String,
    favActor: [{type: Schema.Types.ObjectId,ref:"Actor"}]
});


//Actor.create({name:"Johnny Depp"});
const User= model("User",UserSchema);
User.create({name:"Mr X"});
var actors=["Robert downey jr","Cilian Murphy","Chris Evans","Jackie chan"];
console.log(actors[3]);
async function ref(){
   
    
   
    try{
        const data=await User.findOne({name:"Mr X"}).populate("favActor");
        console.log(data.favActor);
    }catch(err){
      console.log(err.message);
    }
}
ref();


    async function exe(){
        //console.log("name is" + actors[i]);
        for(var i=0;i<actors.length;i++){
            var res= await Actor.find({name:actors[i]});
            console.log(res.length);
          }
       
        if(res.length==0){
            console.log("name :"+ i );
         
          for(var i=0;i<actors.length;i++){
            console.log(i);
            const data=await Actor.create({name: actors[i]});
          }
          
        }
    }
    exe();












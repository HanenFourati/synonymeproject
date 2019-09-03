function SynonymeReducer(state= [] , action){
  switch(action.type){
    case "AJOUTER": return (state.map((el,index)=> index===action._id ? (Object.create({_id:el._id , code:el.code , label: el.label.concat(action.label)})) : el)); //(Object.create({_id:el._id , code:el.code , label: el.label.concat(action.label)}))
    case "SUPPRESSION": return (state.filter((el,index)=>index!==action._id));
    case "EDITION": return (state.map((el,index)=> index===action._id ? (Object.create({_id:el._id , code:el.code , label: action.label})) : el)); 
    case "LOED_SYNONYME_LIST": return (state = action.synonymes);
    default:  return state;
  }
}
    
export default SynonymeReducer;
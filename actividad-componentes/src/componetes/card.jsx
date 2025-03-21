const Card =({Carta}) =>{

const Estilo={

    card:{
        backgroundColor: 'whiteSmoke',
        color:'black',
        borderRadius:'8px',
        boxShadow:'0 4px 8px rgba(0,0,0,0.1)',
        padding: '16px',
        maxWidth:'300px',
        textAlign:'center',
        transition:'transform 0.2s',
         margin: '0 auto'
        }
}

return(
    <div class="card" style={Estilo.card}>
        <img src="https://storage.googleapis.com/ares-profile-pictures/hd/soyacitysv-8cb62eb93d9c373d139c6e1725036425_hd.jpg" class="card-img-top" alt="..."></img>
        <div class="card-body">
        Me llamo diego Jose Rodriguez Pocasangre soy estudiante de desarrollo de software y curso el ultimo año gracias a Dios 
        mi codigo es 20230602
        cumplo años el 9 de septiembre por si alguien me quiere regalar algo xd 
        Mis juego favoritos son: GTA V online, war thunder, minecraft
        Mis artistas favoritos son: lil pep, lana del rey, suicide boy  

       {Carta}
      </div>
    </div>
)
}

export default Card;
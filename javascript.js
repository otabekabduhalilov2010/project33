const catalog = [
    {
        img: 'https://persomed.com.ua/sites/default/files/styles/large/public/images/dieta-pri-vospalenii-zhelchnogo-puzyrja.jpg?itok=bdkzKjUv',
        name: 'Simplest Salad Recipe ever',
        description: 'Lorem ipsum dolor sit a met consectetur,  a dipisicing elit. Corrupti inventore hic iusto fugiat magni!  Dicta tempora voluptate sit cumque, aperiam vel quam doloremque   similique perspiciatis quis reprehenderit accusamus! Incidunt, sit.',
        time: '6 mins ago',
        speak   : '39 comments',


    },

    {
        img: 'https://http2.mlstatic.com/D_NQ_NP_767854-MCO53974428038_022023-O.webp',
        name: 'Beast FasFood Ideas',
        description: 'Lorem ipsum dolor sit a met consectetur,  a dipisicing elit. Corrupti inventore hic iusto fugiat magni!  Dicta tempora voluptate sit cumque, aperiam vel quam doloremque   similique perspiciatis quis reprehenderit accusamus! Incidunt, sit.',
        time: '10 days ago',
        speak   : '0 comments',


    },

    {
        img: 'https://www.wellandgood.com/wp-content/uploads/2016/10/inflammation.jpg?w=1123&h=748',
        name: 'Why to eat salad?',
        description: 'Lorem ipsum dolor sit a met consectetur,  a dipisicing elit. Corrupti inventore hic iusto fugiat magni!  Dicta tempora voluptate sit cumque, aperiam vel quam doloremque   similique perspiciatis quis reprehenderit accusamus! Incidunt, sit.',
        time: '16 hours ago',
        speak   : '9 comments',


    }
]


const wrapper = document.querySelector('.wrapper')


catalog.forEach(card => {
    wrapper.innerHTML += `
    
        <div class="card">
            <img src=${card.img} alt="">
            <h1>${card.name}</h1>
            <p>${card.description}</p>
            <h4>${card.time}</h4>
            <h4>${card.speak}</h4>
        </div>
        `
})



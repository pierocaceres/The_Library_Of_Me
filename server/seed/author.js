const db = require('../db')
const { Author } = require('../models')

db.on('error', console.error.bind(console, "Mongodb connection error:"))

const main = async() => {
    const authors = [
        {
            name: "J. R. R. Tolkien",
            picture: "https://cdn.britannica.com/65/66765-050-63A945A7/JRR-Tolkien.jpg?w=400&h=300&c=crop"
        },
        {
            name: "Stephen King",
            picture: "https://i.guim.co.uk/img/media/56be7b100f9704b507dbac33715297ae2f5bd11e/0_491_4024_2414/master/4024.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=67b671ed36500300ac0b275a00007f79"
        },
        {
            name: "Nicholas Sparks",
            picture: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.ulm.edu%2Flyceum%2Fimages%2Fnicholas-sparks.jpg&imgrefurl=https%3A%2F%2Fwww.ulm.edu%2Flyceum%2Fsparks.html&tbnid=GCFesFkpdDxqhM&vet=12ahUKEwi9hJSmnun2AhX5YDUKHYDgCiAQMygbegUIARCUAg..i&docid=t6ScJiDpuwCxaM&w=225&h=303&q=nicholas%20sparks&ved=2ahUKEwi9hJSmnun2AhX5YDUKHYDgCiAQMygbegUIARCUAg"
        },
        {
            name: "Suzanne Collins",
            picture: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.suzannecollinsbooks.com%2Fimages%2Fsuzannecollins-2020-photocredittoddplitt-x_small.jpg&imgrefurl=https%3A%2F%2Fwww.suzannecollinsbooks.com%2Fbio.htm&tbnid=uMrInoqNksNpGM&vet=12ahUKEwiIms2Dn-n2AhXtgXIEHSVQCh4QMygIegUIARC_AQ..i&docid=RM7aXjSP76pEtM&w=213&h=320&q=susan%20collins%20author&ved=2ahUKEwiIms2Dn-n2AhXtgXIEHSVQCh4QMygIegUIARC_AQ"
        },
        {
            name: "J. K. Rowling",
            picture: "https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100044413599933&imgrefurl=https%3A%2F%2Fm.facebook.com%2FJKRowling&tbnid=Epj7KBL8o5hZ1M&vet=12ahUKEwjrj62Wn-n2AhWRr3IEHbwZDrkQMygBegUIARDVAQ..i&docid=49LXP1WxsmjSNM&w=1781&h=1781&q=jk%20rowling&ved=2ahUKEwjrj62Wn-n2AhWRr3IEHbwZDrkQMygBegUIARDVAQ"
        },
        {
            name: "Dan Brown",
            picture: "https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.boomerslife.org%2Fdan_brown_da_vinci_code_author.jpg&imgrefurl=http%3A%2F%2Fwww.boomerslife.org%2Fdan_brown_da_vinci_code_lost_symbol_author_bio.htm&tbnid=AoVAi37Dj-KyLM&vet=12ahUKEwis6ouwn-n2AhWMrHIEHQhsBqQQMygLegUIARDLAQ..i&docid=KCtuLlaHahx7nM&w=260&h=300&q=the%20davici%20code%20author&ved=2ahUKEwis6ouwn-n2AhWMrHIEHQhsBqQQMygLegUIARDLAQ"
        },
        {
            name: "Jane Austen",
            picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/CassandraAusten-JaneAusten%28c.1810%29_hires.jpg/400px-CassandraAusten-JaneAusten%28c.1810%29_hires.jpg"
        },
        {
            name: "Harper Lee",
            picture: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.al.com%2Fresizer%2F9IHKn5DQKwW1lYS2w129r_i1IsM%3D%2F1280x0%2Fsmart%2Fadvancelocal-adapter-image-uploads.s3.amazonaws.com%2Fimage.al.com%2Fhome%2Fbama-media%2Fwidth2048%2Fimg%2Falphotos%2Fphoto%2F2016%2F11%2F22%2F-579e13e09ad2a7de.JPG&imgrefurl=https%3A%2F%2Fwww.al.com%2Fnews%2F2016%2F02%2Fharper_lee_dead_at_age_of_89_t.html&tbnid=maFIpA53TCySXM&vet=12ahUKEwicpMuHoOn2AhU-gXIEHTOAB_IQMygDegUIARCyAQ..i&docid=Pi23pZl3vSas2M&w=1280&h=1039&q=to%20kill%20a%20mockingbird%20author&hl=en&ved=2ahUKEwicpMuHoOn2AhU-gXIEHTOAB_IQMygDegUIARCyAQ"
        },
    ]

    await Author.insertMany(authors)
    console.log('Created Authors')
}

const run = async () => {
    await main ()
    db.close()
}

run()
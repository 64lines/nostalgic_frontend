import axios from "axios"

const TOKEN = 'dcaf07e4466d5e1a7ed77edb97cb5abdc7ec99302bdd04bab396d980f805145ec277a3f7446299b63820aee41aaff3122ef8efee260e948c7cbf99c77185782e0a1cc0041cf6d8cab4e1c2cad7776a5d58020be9d308ed1e6ec45f1982b1b0b232cdb37911c568c07b826e14b45b1ea0c677c06e977692e7cb277efb4a05c4e0'

const getData = async ({ url }) => {
  return await axios.get(`http://localhost:1337${url}`, { 
    params: { populate: '*' },
    headers: { Authorization: `Bearer ${TOKEN}` }
  })
}

export { getData };
import axios from 'axios';

const API = {
  HOST: 'http://localhost:8080',

  postUsuario: async function (postUserData) {
    try {
      let response = await axios.post(this.HOST + '/usuario', postUserData, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      if (response.status !== 200) {
        throw new Error('Failed to post user data');
      }
      return response.data;
    } catch (error) {
      console.error('Error:', error);
    }
  },

  postEndereco: async function (postEnderecoData) {
    try {
      let response = await axios.post(this.HOST + '/endereco', postEnderecoData, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      if (response.status !== 200) {
        throw new Error('Failed to post endereço data');
      }
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.error('Error:', error);
    }
  },


  postPet: async function (postPetData) {
    try {
      let response = await axios.post(this.HOST + '/pet', postPetData, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      if (response.status !== 200) {
        throw new Error('Failed to post pet data');
      }
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.error('Error:', error);
    }
  },

}

export default API;

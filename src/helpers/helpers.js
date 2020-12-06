import Api from './apiBase'
import Vue from 'vue';
import VueFlashMessage from 'vue-flash-message';
import 'vue-flash-message/dist/vue-flash-message.min.css';

Vue.use(VueFlashMessage, {
    messageOptions: {
        timeout: 3000,
        pauseOnInteract: true
    }
});

export default {
    getfolders(url,) {
        return new Promise((resolve, reject) => {
            Api(500).get(url,).then(function (response) {
                resolve(response)
            })
                .catch(function (error) {
                    if (error.response) {
                        reject(error.response.data.message)
                    } else if (error.request) {
                        reject(new Error('Server cannot be reached'))
                    } else {
                        console.log('Error', error.message)
                        reject(new Error('Something Wrong'))
                    }
                    console.log(error.config)
                })
        })
    },
    deletefolder(url, paramsGet,) {
        return new Promise((resolve, reject) => {
            Api(500).delete(url, { params: paramsGet }).then(function (response) {
                resolve(response)
            })
                .catch(function (error) {
                    if (error.response) {
                        reject(error.response.data.message)
                    } else if (error.request) {
                        reject(new Error('Server cannot be reached'))
                    } else {
                        console.log('Error', error.message)
                        reject(new Error('Something Wrong'))
                    }
                    console.log(error.config)
                })
        })
    },
    createfolder(url, params,) {
        return new Promise((resolve, reject) => {
            Api(500).post(url, params).then(function (response) {
                if (response == null) {
                    reject(null)
                } else {
                    if (response.status == 200) {
                        resolve(response)
                    } else {
                        resolve(response)
                    }
                }
            })
                .catch(function (error) {
                    console.log(error)
                    if (error.response) {
                        reject(error.response.data.message)
                    } else if (error.request) {
                        reject(new Error('Server cannot be reached'))
                    } else {
                        console.log('Error', error)
                        reject(new Error('Something Wrong'))
                    }
                    console.log(error.config)
                })
        })
    },
    updatefolder(url, params,) {
        return new Promise((resolve, reject) => {
            Api(500).put(url, params).then(function (response) {
                if (response == null) {
                    reject(null)
                } else {
                    if (response.status == 200) {
                        resolve(response)
                    } else {
                        resolve(response)
                    }
                }
            })
                .catch(function (error) {
                    console.log(error)
                    if (error.response) {
                        reject(error.response.data.message)
                    } else if (error.request) {
                        reject(new Error('Server cannot be reached'))
                    } else {
                        console.log('Error', error)
                        reject(new Error('Something Wrong'))
                    }
                    console.log(error.config)
                })
        })
    },
    getfiles(url,) {
        return new Promise((resolve, reject) => {
            Api(500).get(url,).then(function (response) {
                resolve(response)
            })
                .catch(function (error) {
                    if (error.response) {
                        reject(error.response.data.message)
                    } else if (error.request) {
                        reject(new Error('Server cannot be reached'))
                    } else {
                        console.log('Error', error.message)
                        reject(new Error('Something Wrong'))
                    }
                    console.log(error.config)
                })
        })
    },
    deletefile(url, paramsGet,) {
        return new Promise((resolve, reject) => {
            Api(500).delete(url, { params: paramsGet }).then(function (response) {
                resolve(response)
            })
                .catch(function (error) {
                    if (error.response) {
                        reject(error.response.data.message)
                    } else if (error.request) {
                        reject(new Error('Server cannot be reached'))
                    } else {
                        console.log('Error', error.message)
                        reject(new Error('Something Wrong'))
                    }
                    console.log(error.config)
                })
        })
    },

    createfile(url, params,) {
        return new Promise((resolve, reject) => {
            Api(500).post(url, params).then(function (response) {
                if (response == null) {
                    reject(null)
                } else {
                    if (response.status == 200) {
                        resolve(response)
                    } else {
                        resolve(response)
                    }
                }
            })
                .catch(function (error) {
                    console.log(error)
                    if (error.response) {
                        reject(error.response.data.message)
                    } else if (error.request) {
                        reject(new Error('Server cannot be reached'))
                    } else {
                        console.log('Error', error)
                        reject(new Error('Something Wrong'))
                    }
                    console.log(error.config)
                })
        })
    },
    updatefile(url, params,) {
        return new Promise((resolve, reject) => {
            Api(500).put(url, params).then(function (response) {
                if (response == null) {
                    reject(null)
                } else {
                    if (response.status == 200) {
                        resolve(response)
                    } else {
                        resolve(response)
                    }
                }
            })
                .catch(function (error) {
                    console.log(error)
                    if (error.response) {
                        reject(error.response.data.message)
                    } else if (error.request) {
                        reject(new Error('Server cannot be reached'))
                    } else {
                        console.log('Error', error)
                        reject(new Error('Something Wrong'))
                    }
                    console.log(error.config)
                })
        })
    },
};
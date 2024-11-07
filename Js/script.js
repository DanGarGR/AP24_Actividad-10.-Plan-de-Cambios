Vue.createApp({
    data() {
        return {
            nuevoContacto: {
                nombre: '',
                telefono: '',
                categoria: ''
            },
            contactos: [],
            categorias: ['Casa', 'Trabajo', 'Amigos', 'Pareja']
        };
    },
    computed: {
        totalLlamadas() {
            return this.contactos.reduce((suma, contacto) => suma + contacto.llamadas, 0);
        },
        totalMensajes() {
            return this.contactos.reduce((suma, contacto) => suma + contacto.mensajes, 0);
        },
        totalContactos() {
            return this.contactos.length;
        }
    },
    methods: {
        agregarContacto() {
            if (this.nuevoContacto.nombre && this.nuevoContacto.telefono && this.nuevoContacto.categoria) {
                this.contactos.push({
                    nombre: this.nuevoContacto.nombre,
                    telefono: this.nuevoContacto.telefono,
                    categoria: this.nuevoContacto.categoria,
                    mensajes: 0,
                    llamadas: 0
                });
                this.nuevoContacto = { nombre: '', telefono: '', categoria: '' };
            }
        },
        eliminarContacto(indice) {
            this.contactos.splice(indice, 1);
        },
        ajustarMensajes(indice, cantidad) {
            const nuevoConteo = this.contactos[indice].mensajes + cantidad;
            if (nuevoConteo >= 0 && nuevoConteo <= 25) {
                this.contactos[indice].mensajes = nuevoConteo;
            }
        },
        ajustarLlamadas(indice, cantidad) {
            const nuevoConteo = this.contactos[indice].llamadas + cantidad;
            if (nuevoConteo >= 0 && nuevoConteo <= 15) {
                this.contactos[indice].llamadas = nuevoConteo;
            }
        }
    }
}).mount('#aplicacion');

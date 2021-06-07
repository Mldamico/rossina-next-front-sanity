export const productoQuery = `
  query allCorseteria($tipo: String, $skip: Int = 0, $pageSize: Int) {
    productos: allProducto(where: {tipo: {matches: $tipo}}, limit: $pageSize, offset:$skip) {
      _id
      nombre
      articulo
      tipo
      descripcion
      slug{
        current
      }
      marca
      tipoOpcional
      images{
        asset{
          url
        }
      }
      precio
      disponible
      colores
      conjunto{
        conjunto
        precio
      }
      talles
      mainImage{
        asset{
          url
        }
      }
    }
    counts: allProducto(where:{tipo: {matches: $tipo}}){
      nombre
    }
  }

  `;

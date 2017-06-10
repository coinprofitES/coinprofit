// Creando colección en mongodb -

db.createCollection("stocks", {
  autoIndexId: true,
  size: 1048576,
  max: 100
});

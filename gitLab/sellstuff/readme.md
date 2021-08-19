sequelize model:create --name Product --attributes 'title:string description:string price:double imageURL:string userId:integer'

sequelize db:migrate

// adding migration for userid foreign key

sequelize migration:create --name 'adding-userid-as-fk-constraint-products'

sequelize model:create --name Comment --attributes 'title:string description:string productId:integer'

sequelize migration:create --name 'adding-fk-constraint-productid-in-comments'

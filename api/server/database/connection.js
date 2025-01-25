require('dotenv').config()

const mongoose = require('mongoose')
const databaseUrl = process.env.DATABASE_URL

module.exports = async () => {
	try {
		await mongoose.connect(databaseUrl, {
			useNewUrlParser: true,
			useUnifiedTopology: true, // Corrige ici
		})
		console.log('Database successfully connected')
	} catch (error) {
		console.error(`Database Connectivity Error: ${error}`)
		process.exit(1) // Cela suffira pour arrêter le processus en cas d'erreur
	}
}


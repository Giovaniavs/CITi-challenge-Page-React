const keystone = require('keystone');
const User = keystone.list('User');

exports = module.exports = (done) => {
	new User.model({
		name: 'Giovani',
		email: 'gavs2@cin.ufpe.br',
		password: 'senha123',
		canAccessKeystone: true,
	}).save(done);
};

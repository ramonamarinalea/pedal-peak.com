const fs = require('fs');
const routes = JSON.parse(fs.readFileSync('swiss-routes.json', 'utf8'));
const routesToRemove = ['3258351448583518970', '3044608024737437842', '3081878158663356240'];
const filteredRoutes = routes.filter(route => \!routesToRemove.includes(route.id_str));
fs.writeFileSync('swiss-routes.json', JSON.stringify(filteredRoutes, null, 2));
console.log('Removed', routes.length - filteredRoutes.length, 'routes. New count:', filteredRoutes.length);
EOF < /dev/null
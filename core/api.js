const wdk = require('wikidata-sdk');
const fetch = require('isomorphic-fetch');

module.exports = async name => {
  const sparql = `
    SELECT  DISTINCT ?id ?idLabel (SAMPLE(?birth) as ?birth_date)
    (SAMPLE(?death_date) as ?dateOfDeath)  WHERE {
      ?id wdt:P31 wd:Q5.
      ?id wdt:P569 ?birth .
      OPTIONAL{?id wdt:P570 ?death_date .}
      SERVICE wikibase:label {
      bd:serviceParam wikibase:language "en".
      ?id rdfs:label ?idLabel .
      }?id ?label "${name}"@en.
    }
    GROUP BY ?id ?idLabel
  `;
  const url = wdk.sparqlQuery(sparql);
  const results = await fetch(url)
    .then(res => res.json())
    .then(wdk.simplify.sparqlResults);

  return results;
};

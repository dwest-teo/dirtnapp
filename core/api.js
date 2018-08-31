const wdk = require('wikidata-sdk');
const fetch = require('isomorphic-fetch');

module.exports = async name => {
  const sparql = `
    SELECT DISTINCT ?id ?idLabel (SAMPLE(year(?birth)) AS ?birthYear) (SAMPLE(year(?death_date)) AS ?deathYear) (SAMPLE(?occupationLabel) AS ?occupations) WHERE {
      ?id wdt:P31 wd:Q5.
      ?id wdt:P569 ?birth.
      OPTIONAL { ?id wdt:P570 ?death_date. }
      OPTIONAL { ?id wdt:P106 ?occupation. }
      SERVICE wikibase:label {
        bd:serviceParam wikibase:language "en".
        ?id rdfs:label ?idLabel.
        ?occupation rdfs:label ?occupationLabel
      }
      ?id ?label "${name}"@en.
    }
    GROUP BY ?id ?idLabel
  `;
  const url = wdk.sparqlQuery(sparql);
  const results = await fetch(url)
    .then(res => res.json())
    .then(wdk.simplify.sparqlResults);

  return results;
};

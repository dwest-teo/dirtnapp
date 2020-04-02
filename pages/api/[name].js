import wdk from 'wikidata-sdk';
import fetch from 'isomorphic-fetch';

export default async ({ query: { name } }, res) => {
  const sparql = `
  SELECT DISTINCT ?id ?idLabel (SAMPLE(year(?birth)) AS ?birthYear) (SAMPLE(year(?death_date)) AS ?deathYear) (SAMPLE(?occupationLabel) AS ?occupations) (SAMPLE(?pic) AS ?picture) WHERE {
      ?id wdt:P31 wd:Q5.
      ?id wdt:P569 ?birth.
      OPTIONAL { ?id wdt:P570 ?death_date. }
      OPTIONAL { ?id wdt:P106 ?occupation. }
      OPTIONAL { ?id wdt:P18 ?pic.}
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
    .then(r => r.json())
    .then(wdk.simplify.sparqlResults)
    .catch(err => res.status(400).json(err));

  res.status(200).json(results);
};

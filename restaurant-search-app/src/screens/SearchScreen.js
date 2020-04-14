import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

function SearchScreen() {
  const [term, setTerm] = useState("");
  const [searchApi, results] = useResults();

  useEffect(() => {
    setTerm("");
  }, []);

  const filterResultsByPrice = (price) =>
    results.filter((result) => result.price === price);

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={filterResultsByPrice("$")}
        />
        <ResultsList
          title="Bit Pricier"
          results={filterResultsByPrice("$$")}
        />
        <ResultsList
          title="Big Spender"
          results={filterResultsByPrice("$$$")}
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SearchScreen;

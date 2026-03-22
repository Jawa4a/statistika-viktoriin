import type { Question } from "../types/quiz";

export const questions: Question[] = [
    {
        id: 1,
        question: "Kui suur oli Eesti rahvaarv 2026. aasta alguses?",
        options: [
            { id: "a", text: "1 220 000" },
            { id: "b", text: "1 363 000" },
            { id: "c", text: "1 450 000" },
            { id: "d", text: "1 550 000" },
        ],
        correctOptionId: "b",
        fact: "2026. aasta alguses elas Eestis ligikaudu 1,36 miljonit inimest. Rahvaarvu kasvu on viimastel aastatel toetanud eelkõige sisseränne, kuna loomulik iive on jäänud negatiivseks.",
    },
    {
        id: 2,
        question: "Kui palju lapsi sündis Eestis 2025. aastal?",
        options: [
            { id: "a", text: "9 100" },
            { id: "b", text: "12 500" },
            { id: "c", text: "16 000" },
            { id: "d", text: "19 500" },
        ],
        correctOptionId: "a",
        fact: "2025. aastal sündis Eestis 9092 last. Sündide arv on viimastel aastatel vähenenud, mis peegeldab laiemat suundumust, kus pered saavad vähem lapsi ja laste saamine lükkub hilisemasse vanusesse.",
    },
    {
        id: 3,
        question: "Millises suurusjärgus oli Eesti keskmine brutokuupalk 2025. aastal?",
        options: [
            { id: "a", text: "1 200 eurot" },
            { id: "b", text: "1 700 eurot" },
            { id: "c", text: "2 100 eurot" },
            { id: "d", text: "2 800 eurot" },
        ],
        correctOptionId: "c",
        fact: "2025. aastal oli Eesti keskmine brutokuupalk 2092 eurot. Kõrgemat palka maksti eelkõige info- ja sidetegevuse ning teaduse valdkonnas, samas kui mõnes teenindus- ja ehitussektori harus jäid palgad madalamaks.",
    },
    {
        id: 4,
        question: "Kui palju oli Eestis 2025. aastal töötuid?",
        options: [
            { id: "a", text: "Umbes 35 000" },
            { id: "b", text: "Umbes 56 000" },
            { id: "c", text: "Umbes 75 000" },
            { id: "d", text: "Umbes 95 000" },
        ],
        correctOptionId: "b",
        fact: "2025. aastal oli Eestis umbes 56 200 töötut, mis tegi töötuse määraks 7,5%. Kõige keerulisem oli olukord noorte, eriti 15–24-aastaste seas.",
    },
    {
        id: 5,
        question: "Kui suur osa Eesti elanikest elas 2024. aastal suhtelises vaesuses?",
        options: [
            { id: "a", text: "9,5%" },
            { id: "b", text: "14,5%" },
            { id: "c", text: "19,5%" },
            { id: "d", text: "28,5%" },
        ],
        correctOptionId: "c",
        fact: "2024. aastal elas suhtelises vaesuses 19,5% Eesti elanikest. Peaaegu iga viienda inimese sissetulek jäi alla 60% mediaansissetulekust.",
    },
    {
        id: 6,
        question: "Kuidas muutus Eesti majandus ehk SKP 2025. aastal?",
        options: [
            { id: "a", text: "Langes 1,2%" },
            { id: "b", text: "Kasvas 0,6%" },
            { id: "c", text: "Kasvas 2,8%" },
            { id: "d", text: "Jäi samale tasemele" },
        ],
        correctOptionId: "b",
        fact: "2025. aastal kasvas Eesti sisemajanduse koguprodukt 0,6%. Pärast kahte keerulisemat aastat tähendas see, et majandus liikus taas kasvusuunas.",
    },
    {
        id: 7,
        question: "Kui suur oli Eestis 2024. aastal sooline palgalõhe?",
        options: [
            { id: "a", text: "4,5%" },
            { id: "b", text: "8,9%" },
            { id: "c", text: "13,2%" },
            { id: "d", text: "21,5%" },
        ],
        correctOptionId: "c",
        fact: "2024. aastal oli sooline palgalõhe Eestis 13,2%. Naiste keskmine brutotunnipalk oli meeste omast märgatavalt madalam, kuigi erinevus on varasemaga võrreldes vähenenud.",
    },
];
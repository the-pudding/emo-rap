library("dbplyr", lib.loc="/Library/Frameworks/R.framework/Versions/3.5/Resources/library")
library("tidytext", lib.loc="/Library/Frameworks/R.framework/Versions/3.5/Resources/library")
library("geniusR", lib.loc="/Library/Frameworks/R.framework/Versions/3.5/Resources/library")
library("readr", lib.loc="/Library/Frameworks/R.framework/Versions/3.5/Resources/library")library(magrittr)
library(dplyr)
library(magrittr)
library(tidyverse)
library(SnowballC)
library(hunspell)
library(textstem)
library(rjson)

dashboard <- genius_album(artist = "dashboard confessional", album = "the places you have come to fear the most")
radiohead <- genius_album(artist = "radiohead", album = "the bends")
xxx <- genius_album(artist = "xxxtentacion", album = "question mark")
liluzivert <- genius_album(artist = "lil uzi vert", album = "luv is rage 2")
juicewrld <- genius_album(artist = "juice wrld", album = "goodbye good riddance")
lilpeep <- genius_album(artist = "lil peep", album = "come over when-you re sober pt 1")
post <- genius_album(artist = "post malone", album = "beerbongs bentleys")
drake <- genius_album(artist = "drake", album = "scorpion")
college_dropout <- genius_album(artist = "kanye west", album = "the college dropout")
ye <- genius_album(artist = "kanye west", album = "ye")
culture <- genius_album(artist = "migos", album = "culture")
lilpump <- genius_album(artist = "lil pump", album = "lil pump")
takingback <- genius_album(artist = "taking back sunday", album = "tell all your friends")
chemicalromance <- genius_album(artist = "my chemical romance", album = "three cheers for sweet revenge")
falloutboy <- genius_album(artist = "fall out boy", album = "from under the cork tree")
jimmyeatworld <- genius_album(artist = "jimmy eat world", album = "bleed american")
brandnew <- genius_album(artist = "brand new", album = "deja entendu")
paramore <- genius_album(artist = "paramore", album = "riot")
heartbreaks <- genius_album(artist = "kanye west", album = "808s heartbreak")
tyler <- genius_album(artist = "tyler the creator", album = "flower boy")
kidcudi <- genius_album(artist = "kid cudi", album = "Man on the moon the end of day")
deathgrips <- genius_album(artist = "death grips", album = "the money store")
princess_red <- genius_album(artist = "princess nokia", album = "a girl cried red")
tripple_trip <- genius_album(artist = "Trippie redd", album = "life s a trip")
yung_lean <- genius_album(artist = "Yung Lean", album = "stranger")
nothing_reaper <- genius_album(artist = "Nothingnowhere", album = "reaper")
nothing_ruiner <- genius_album(artist = "Nothingnowhere", album = "ruiner")
lilxan <- genius_album(artist = "Lil xan", album = "Total xanarchy")
riconasty <- genius_album(artist = "rico nasty", album = "nasty")
youngthug <- genius_album(artist = "young thug", album = "beautiful thugger girls")
black_parade <- genius_album(artist = "my chemical romance", album = "the black parade")
where_you <- genius_album(artist = "taking back sunday", album = "where you want to be")
earl_sweatshirt <- genius_album(artist = "earl sweatshirt", album = "I don t like shit i don t go outside")
weeknd <- genius_album(artist = "the weeknd", album = "trilogy")
future <- genius_album(artist = "future", album = "ds2")
pilots <- genius_album(artist = "twenty one pilots", album = "vessel")
hatful <- genius_album(artist = "the smiths", album = "hatful of hollow")
queen <- genius_album(artist = "the smiths", album = "the queen is dead")
wontlisten <- genius_album(artist = "the smiths", album = "the world won t listen")
louder <- genius_album(artist = "the smiths", album = "louder than bombs")
saves <- genius_album(artist = "saves the day", album = "Stay What You Are")
football <- genius_album(artist = "american football", album = "american football")
the_used <- genius_album(artist = "The Used", album = "In Love and Death")
straylight <- genius_album(artist = "straylight run", album = "straylight run")
braid <- genius_album(artist = "braid", album = "Frame canvas")
sunny <- genius_album(artist = "sunny day real estate", album = "diary")
panic <- genius_album(artist = "Panic at the disco", album = "A fever you can t sweat out")
avril <- genius_album(artist = "avril lavigne", album = "let go")

sum41 <- genius_album(artist = "sum 41", album = "all killer no filler")


listdf <- list(dashboard,radiohead,xxx,liluzivert,juicewrld,lilpeep,post,drake,college_dropout,ye,culture,lilpump,takingback,chemicalromance,falloutboy,jimmyeatworld,paramore,heartbreaks,tyler,kidcudi,deathgrips,princess_red,tripple_trip,yung_lean,nothing_reaper,nothing_ruiner,lilxan,riconasty,youngthug,black_parade,where_you,weeknd,future,pilots,queen,saves,football,the_used,straylight,braid,sunny,panic)
listartists <- list("dashboard","radiohead","xxxtentacion","liluzivert","juicewrld","lilpeep","postmalone","drake","kanye college_dropout","kanye ye","migos","lilpump","takingback","chemicalromance","fall out boy","jimmyeatworld","paramore","kanye heartbreak","tyler","kidcudi","deathgrips","princess_red","tripple_trip","yung_lean","nothing_reaper","nothing_ruiner","lilxan","rico nasty","young thug","black_parade","where_you","weeknd","future","pilots","queen","saves","football","the_used","straylight","braid","sunny","panic")
listNew <- listdf
names(listNew) <- listartists

intensity <- read_tsv('intensity.txt')
happyness <- read_tsv('happyness.txt')

happyness_filter <- happyness[c('word','happiness_average')]
happy_average <- mean(as.numeric(unlist(happyness_filter[('happiness_average')])))

happyness_filter_new <- happyness_filter %>%
  mutate(happiness_average_net = happiness_average - happy_average)
  
happyness_filter_new <- happyness_filter_new[c('word','happiness_average_net')]

sad_score_words <- intensity %>% filter(AffectDimension == "sadness")
sad_score_words <- sad_score_words[c('word','score')]
colnames(sad_score_words) <- c('word','sad')

sad_score_words <- sad_score_words %>% filter(word != 'bitch') %>%
  filter(word != 'gang') %>%
  filter(word != 'tax') %>%
  filter(word != 'fat')

inWords <- sad_score_words %>%
  filter(grepl("ing$", word)) %>%
  mutate(word = sub('ing$', 'in', word))

sad_score_words <- rbind(sad_score_words,inWords)

fear_score_words <- intensity %>% filter(AffectDimension == "fear")
fear_score_words <- fear_score_words[c('word','score')]
colnames(fear_score_words) <- c('word','fear')

fear_score_words <- fear_score_words %>% filter(word != 'tax') %>%
  filter(word != 'bitch') %>%
  filter(word != 'fear') %>%
  filter(word != 'savage') %>%
  filter(word != 'cash') %>%
  filter(word != 'chicken') %>%
  filter(word != 'missile') %>%
  filter(word != 'gang') %>%
  filter(word != 'crocodile')

inWords <- fear_score_words %>%
  filter(grepl("ing$", word)) %>%
  mutate(word = sub('ing$', 'in', word))
  
fear_score_words <- rbind(fear_score_words,inWords)

joy_score_words <- intensity %>% filter(AffectDimension == "joy")
joy_score_words <- joy_score_words[c('word','score')]
colnames(joy_score_words) <- c('word','joy')

sad_score_words <- sad_score_words %>% filter(word != 'bitch')

over_.5 <- intensity %>% filter(score > .5)

heart = c("heart")
death = c("death","die","dying","kill","killing","killin","dyin","dead","lifeless","drown","dies","kills")
dark = c("dark","darken","gloomy","gloom","somber","darkens")
sad = c("sad","sadness","sadder","sorrow","unhappy","despair","despairing","saddest","sorrowful","sorrows")
love = c("love","loving","loved","lover","lovin","loves")
hate = c("hate","hating","hatin","hatred","hates")
feel = c("feel","felt","feeling","feels","feelings")

pain_words = c("pain","painful","hurt","hurts","hurting","pains","hurtin")
loved = c("loved")
heartbreak = c("heartbreak","heartache")
toAnalyze <- tibble(word = ghost) %>% select(word) %>% mutate(cry = T)

joy_words <- sentiments %>%
  filter(lexicon == 'nrc', sentiment == 'joy') %>%
  select(word) %>%
  mutate(joy = T)

sad_words <- sentiments %>%
  filter(lexicon == 'nrc', sentiment == 'sadness') %>%
  select(word) %>%
  mutate(sad = T) %>%
  filter(word != 'bitch') %>%
  filter(word != 'tax') %>%
  filter(word != 'fat') %>%
  filter(word != 'nasty') %>%
  rbind(c("dead",TRUE)) 

fear_words <- sentiments %>%
  filter(lexicon == 'nrc', sentiment == 'fear') %>%
  select(word) %>%
  mutate(fear = T) %>%
  filter(word != 'tax') %>%
  filter(word != 'bitch') %>%
  filter(word != 'fear') %>%
  filter(word != 'savage') %>%
  filter(word != 'cash') %>%
  filter(word != 'chicken') %>%
  filter(word != 'missile') %>%
  filter(word != 'nasty') %>%
  filter(word != 'crocodile')

cutOff <- .3

wordPercents <- lapply(1:length(listdf), getPercents)
df <- do.call(rbind, Map(data.frame, percents=wordPercents, artist=listartists))
df <- df %>% arrange(-percents)
write_csv(df, "df.csv")

wordPercents <- lapply(1:length(listdf), getTrackPercents)
merged <- wordPercents %>% reduce(full_join)
write_csv(merged, "tracks.csv")

wordPercents <- lapply(1:length(listdf), getTrackWords)
merged <- wordPercents %>% reduce(full_join)
View(merged)
write_csv(merged, "track_words.csv")


wordPercents <- lapply(1:length(listdf), getTrackLines)
merged <- wordPercents %>% reduce(full_join)
write_csv(merged, "lines.csv")

getWordPercents = function(Data) {
  newData <- Data %>%
    filter(!grepl("(Skit)", track_title, fixed = TRUE)) %>%
    filter(!grepl("(Skit ", track_title, fixed = TRUE)) %>%
    filter(track_title != "Intro") %>%
    
    unnest_tokens(word, lyric) %>%
    
    mutate(word_stem = lemmatize_words(gsub("'", '', word))) %>%
    
    
    anti_join(stop_words, by = 'word') %>%
    left_join(toAnalyze, by = 'word') %>%
    group_by(track_title) %>%
    summarize(total_sad = ifelse(sum(cry, na.rm = T) > 0, TRUE, FALSE)) %>%
    summarize(prct_word = round(sum(ifelse(total_sad == TRUE, 1, 0)) / n(),2)) %>%
    ungroup
  return(newData %>% pull(prct_word))
}

getTrackLines = function(Data) {
  newData <- listdf[[Data]]
  newData <- newData %>%
    filter(!grepl("(Skit)", track_title, fixed = TRUE)) %>%
    filter(!grepl("(Skit ", track_title, fixed = TRUE)) %>%
    filter(track_title != "Intro") %>%
    unnest_tokens(word, lyric) %>%
    mutate(word = ifelse(word == "shoulda","should",word)) %>%
    mutate(word = ifelse(word == "til","until",word)) %>%
    mutate(word = ifelse(word == "yeah","yes",word)) %>%
    mutate(word = ifelse(word == "yah","yes",word)) %>%
    mutate(word = ifelse(word == "ooh","oh",word)) %>%
    mutate(word = ifelse(word == "em","them",word)) %>%
    mutate(word = ifelse(word == "yah","yes",word)) %>%
    mutate(word = ifelse(word == "gon","going",word)) %>%
    mutate(word = ifelse(word == "somethin","something",word)) %>%
    mutate(word = ifelse(word == "wanna","want",word)) %>%
    anti_join(stop_words, by = 'word') %>%
    
    # mutate(word = lemmatize_words(gsub("'", '', word))) %>%
    mutate(word = ifelse(word == "dead","death",word)) %>%
    mutate(word = ifelse(word == "feel","feeling",word)) %>%
    mutate(artist = listartists[[Data]]) %>%
    
    left_join(filter(sad_score_words, sad > cutOff), by = 'word') %>%
    left_join(filter(fear_score_words, fear > cutOff), by = 'word') %>%

    mutate(sad_fear = ifelse(!is.na(sad) | !is.na(fear),TRUE,FALSE)) %>%
    filter(sad_fear == TRUE) %>%
    distinct(line,track_title,artist,word) %>%
    left_join(newData %>% mutate(artist = listartists[[Data]]), by = c('line' = 'line', 'track_title' = 'track_title', 'artist' = 'artist'))
  ungroup
  return(newData)
  # return(newData %>% pull(track_average))
}

getTrackWords = function(Data) {
  newData <- listdf[[Data]]
  newData <- newData %>%
    filter(!grepl("(Skit)", track_title, fixed = TRUE)) %>%
    filter(!grepl("(Skit ", track_title, fixed = TRUE)) %>%
    filter(track_title != "Intro") %>%
    unnest_tokens(word, lyric) %>%
    mutate(word = ifelse(word == "shoulda","should",word)) %>%
    mutate(word = ifelse(word == "til","until",word)) %>%
    mutate(word = ifelse(word == "yeah","yes",word)) %>%
    mutate(word = ifelse(word == "yah","yes",word)) %>%
    mutate(word = ifelse(word == "ooh","oh",word)) %>%
    mutate(word = ifelse(word == "em","them",word)) %>%
    mutate(word = ifelse(word == "yah","yes",word)) %>%
    mutate(word = ifelse(word == "gon","going",word)) %>%
    mutate(word = ifelse(word == "somethin","something",word)) %>%
    mutate(word = ifelse(word == "wanna","want",word)) %>%
    anti_join(stop_words, by = 'word') %>%
    
    # mutate(word = lemmatize_words(gsub("'", '', word))) %>%
    mutate(word = ifelse(word == "dead","death",word)) %>%
    mutate(word = ifelse(word == "feel","feeling",word)) %>%
    mutate(artist = listartists[[Data]]) %>%
    
    left_join(filter(sad_score_words, sad > cutOff), by = 'word') %>%
    left_join(filter(fear_score_words, fear > cutOff), by = 'word') %>%
    mutate(sad_fear = ifelse(!is.na(sad) | !is.na(fear),TRUE,FALSE)) %>%
    filter(sad_fear == TRUE) %>%
    distinct(word,track_title,artist)
    ungroup
  return(newData)
  # return(newData %>% pull(track_average))
}

getTrackPercents = function(Data) {
  newData <- listdf[[Data]]
  newData <- newData %>%
    filter(!grepl("(Skit)", track_title, fixed = TRUE)) %>%
    filter(!grepl("(Skit ", track_title, fixed = TRUE)) %>%
    filter(track_title != "Intro") %>%
    unnest_tokens(word, lyric) %>%
    mutate(word = ifelse(word == "shoulda","should",word)) %>%
    mutate(word = ifelse(word == "til","until",word)) %>%
    mutate(word = ifelse(word == "yeah","yes",word)) %>%
    mutate(word = ifelse(word == "yah","yes",word)) %>%
    mutate(word = ifelse(word == "ooh","oh",word)) %>%
    mutate(word = ifelse(word == "em","them",word)) %>%
    mutate(word = ifelse(word == "yah","yes",word)) %>%
    mutate(word = ifelse(word == "gon","going",word)) %>%
    mutate(word = ifelse(word == "somethin","something",word)) %>%
    mutate(word = ifelse(word == "wanna","want",word)) %>%
    
    anti_join(stop_words, by = 'word') %>%
    
    # mutate(word = lemmatize_words(gsub("'", '', word))) %>%
    mutate(word = ifelse(word == "dead","death",word)) %>%
    mutate(word = ifelse(word == "feel","feeling",word)) %>%
    mutate(artist = listartists[[Data]]) %>%
    
    
    left_join(filter(sad_score_words, sad > cutOff), by = 'word') %>%
    left_join(filter(fear_score_words, fear > cutOff), by = 'word') %>%
    group_by(track_title,artist) %>%
    summarize(pct_sad = round(sum(!is.na(sad) | !is.na(fear)) / n(), 4)) %>%
    arrange(-pct_sad) %>%
    ungroup
  return(newData)
  # return(newData %>% pull(track_average))
}

getPercents = function(Data) {
  newData <- listdf[[Data]]
  newData <- newData %>%
    filter(!grepl("(Skit)", track_title, fixed = TRUE)) %>%
    filter(!grepl("(Skit ", track_title, fixed = TRUE)) %>%
    filter(track_title != "Intro") %>%
    unnest_tokens(word, lyric) %>%
    
    mutate(word = ifelse(word == "shoulda","should",word)) %>%
    mutate(word = ifelse(word == "til","until",word)) %>%
    mutate(word = ifelse(word == "yeah","yes",word)) %>%
    mutate(word = ifelse(word == "yah","yes",word)) %>%
    mutate(word = ifelse(word == "ooh","oh",word)) %>%
    mutate(word = ifelse(word == "em","them",word)) %>%
    mutate(word = ifelse(word == "yah","yes",word)) %>%
    mutate(word = ifelse(word == "gon","going",word)) %>%
    mutate(word = ifelse(word == "somethin","something",word)) %>%
    mutate(word = ifelse(word == "wanna","want",word)) %>%
    
    anti_join(stop_words, by = 'word') %>%

    # mutate(word = lemmatize_words(gsub("'", '', word))) %>%
    mutate(word = ifelse(word == "dead","death",word)) %>%
    mutate(word = ifelse(word == "feel","feeling",word)) %>%

    left_join(filter(sad_score_words, sad > cutOff), by = 'word') %>%
    left_join(filter(fear_score_words, fear > cutOff), by = 'word') %>%
    group_by(track_title) %>%
    summarize(pct_sad = round(sum(!is.na(sad) | !is.na(fear)) / n(), 4)) %>%
    arrange(-pct_sad) %>%
    summarize(track_average = mean(pct_sad)) %>%
    ungroup
  return(newData %>% pull(track_average))
}

newData <- liluzivert %>%
  filter(!grepl("(Skit)", track_title, fixed = TRUE)) %>%
  filter(!grepl("(Skit ", track_title, fixed = TRUE)) %>%
  filter(track_title != "Intro") %>%
  unnest_tokens(word, lyric) %>%

  mutate(word = ifelse(word == "shoulda","should",word)) %>%
  mutate(word = ifelse(word == "til","until",word)) %>%
  mutate(word = ifelse(word == "yeah","yes",word)) %>%
  mutate(word = ifelse(word == "yah","yes",word)) %>%
  mutate(word = ifelse(word == "ooh","oh",word)) %>%
  mutate(word = ifelse(word == "em","them",word)) %>%
  mutate(word = ifelse(word == "yah","yes",word)) %>%
  mutate(word = ifelse(word == "gon","going",word)) %>%
  mutate(word = ifelse(word == "somethin","something",word)) %>%
  mutate(word = ifelse(word == "wanna","want",word)) %>%
  mutate(word = ifelse(word == "takin","taking",word)) %>%
  
  anti_join(stop_words, by = 'word') %>%
  
  # mutate(word_stem = lemmatize_words(gsub("'", '', word))) %>%
  mutate(word = ifelse(word == "dead","death",word)) %>%
  mutate(word = ifelse(word == "feel","feeling",word)) %>%
  
  left_join(filter(sad_score_words, sad > cutOff), by = 'word') %>%
  left_join(filter(fear_score_words, fear > cutOff), by = 'word') %>%
  # left_join(sad_words, by = 'word') %>%
  # left_join(fear_words, by = 'word') %>%
  # filter(!is.na(sad) | !is.na(fear)) %>%

  group_by(track_title) %>%
  summarize(pct_sad = round(sum(!is.na(sad) | !is.na(fear)) / n(), 4)) %>%
  arrange(-pct_sad) %>%
  summarize(track_average = mean(pct_sad)) %>%

  
    # mutate(sad_fear = ifelse(!is.na(sad) | !is.na(fear),TRUE,FALSE)) %>%
  # filter(sad_fear == TRUE) %>%
  # distinct(line,track_title) %>%
  # left_join(post, by = c('line' = 'line', 'track_title' = 'track_title'))
  ungroup
View(newData)
library(tidyverse)

YouTubeData = read_csv("C:\\Users\\Kevin Jiang\\Downloads\\YouTubeData\\Data2 - YoutubeData Cleaned.csv")

fix(YouTubeData)
attach(YouTubeData)

par(mfrow = c(2, 2))
plot(x = YouTubeData$Likes, y = YouTubeData$Views, xlab = 'Likes', ylab = 'Views', main = 'Likes and Its Effects on Views')
qqnorm(YouTubeData$Views, main = 'QQ Views Normality', xlab = 'Theoretical Dist',
       ylab = 'Sample dist', col = 'darkslategray3')
qqline(YouTubeData$Views, col = 'darkmagenta')

hist(YouTubeData$Views, main = 'Histograms for YouTube Views', xlab = 'Views')
boxplot(YouTubeData$Views, main = 'Boxplot of YouTube Views', ylab = 'Views')


shapiro.test(YouTubeData$Views)

model = lm(Views ~ Likes)
summary(model)

detach(YouTubeData)

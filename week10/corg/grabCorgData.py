# base page: http://www.cardiped.net/browseDogs.php?start=0&p_f=0&sortBy=name&alpha=a
# for web scraping
import requests, bs4
import httplib2

# were are we saving data?
saveFile = '/Users/jillnaiman1/spring2019online/week10/data/corgiData.csv'

#-----------------------------------------------------------


# webparsing numbers
startSmall=0
startLarge=0

name = []
sire = []
dam = []
sex = []
year = []

while startSmall < 2402:
    w = 'http://www.cardiped.net/browseDogs.php?start='+\
        str(int(startSmall))+\
        '&p_f='+\
        str(int(startLarge))+\
        '&sortBy=name&alpha=a'
    print(w)
    
    # parse
    page = requests.get(w)
    soup = bs4.BeautifulSoup(page.text, 'html.parser')
    soup = str(soup)

    # split by details
    splitSoup = soup.split('<a href="details.php')
    # ignore top
    splitSoup = splitSoup[1:]
    # take out last bit from last one
    x = splitSoup[-1]
    y = x.split('</table>')
    splitSoup[-1] = y[0]

    # loop and append
    for s in splitSoup:
        #print(s)
        #print('---')

        # name
        x = s.split('>')[1]
        n = x.split('</a')[0]
        # look for hover image tags and remove
        if n.find('<img') != -1:
            n = n.split('\t')[0]
        name.append(n)

        # parse for sire
        x = s.split('<td>')
        sire.append(x[1].split('</td>')[0])

        # parse for dam
        dam.append(x[2].split('</td>')[0])

        # parse for sex
        sex.append(x[3].split('</td>')[0])

        # parse for birth year
        year.append(x[4].split('</td>')[0])
        
    startSmall += 20
    if startSmall%100 == 0:
        startLarge += 100

# write file
f = open(saveFile,'w')
f.write('name, dam, sire, sex, year\n')

for i in range(len(name)):
    f.write(name[i] + ',' + dam[i] + ',' + sire[i] + ',' + sex[i] + ',' + year[i] + '\n')

f.close()

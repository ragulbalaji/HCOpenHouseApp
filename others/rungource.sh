# Simple Invoker for Gource to Visualize HCOpenHouseApp
# Ragul Balaji Dec 2015
cd ..
gource -s 20 --highlight-users -1280x720 --title "Hwa Chong Open House App 2016 Development Progress" --follow-user Ragul\ Balaji
#gource -s 5 --highlight-users -1280x720 --title "Hwa Chong Open House App 2016 Development Progress" --follow-user Ragul\ Balaji --output-framerate 60 -o - | ffmpeg -y -r 60 -f image2pipe -vcodec ppm -i - -vcodec libx264 -preset ultrafast -pix_fmt yuv420p -crf 1 -threads 0 -bf 0 gource.mp4

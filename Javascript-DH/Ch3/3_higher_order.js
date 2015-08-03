function comparenumbers(x,y){
  if (x<y)
    return -1;
  else if (x>y)
    return 1;
  else
    return 0;
}

[8,2,3,6,7,9].sort(comparenumbers);

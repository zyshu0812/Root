function main(tbl){
	try{
	tbl.put(".table","users")
	dao.save(tbl)
	attr("_httpurl","index")
	return {"code":200,"url":"index"}
	}catch (e) {
		return {"code":-1,"msg":e};
	}
}
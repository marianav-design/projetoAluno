const Aluno=require("../models/Aluno");
class AlunoController {

    static async relatorio (req,res){
        const status = req.query.s;
        const alunos = await Aluno.find();
        res.render("aluno/relatorio", {alunos, status});
        
    }

    static async atualizarGet (req,res){
        const aluno = await Aluno.findOne({matricula:req.params.matricula})
        res.render("aluno/cadastrar",{aluno});
    };

    
    static async atualizarPost (req,res){
        const aluno = req.body;
        await Aluno.updateOne({_id:aluno._id},{
            matricula:aluno.matricula,
            nome:aluno.nome,
            curso:aluno.curso

        });
    


        res.redirect("/alunos?s=3");
    };

    static cadastrarGet(req,res){
        const aluno={};
        res.render("aluno/cadastrar", {aluno});
    } 
    
    static async detalhar (req,res){
        const aluno = await Aluno.findOne({matricula:req.params.matricula})
        res.render("aluno/detalhar",{aluno});
    };


    static async excluir(req, res){
        const aluno= await Aluno.deleteOne({matricula:req.params.matricula})
        res.redirect("/alunos?s=2");


    };

    static  async cadastrar (req,res){
        const aluno=req.body;
        const novoAluno = new Aluno ({
            matricula:aluno.matricula,
            nome:aluno.nome,
            curso: aluno.curso
        }); 
       
     await novoAluno.save();
     res.redirect("/alunos?s=1");
};
            
            
}

module.exports= AlunoController;  